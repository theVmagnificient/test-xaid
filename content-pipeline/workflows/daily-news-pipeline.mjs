export const meta = {
  name: 'daily-news-pipeline',
  description: 'Ingest radiology/medtech news, dedup + score for xAID fit & SEO, draft top candidates in house style, fact-check every claim. Outputs review-ready drafts to content-pipeline/drafts/ — NEVER deploys.',
  phases: [
    { title: 'Ingest', detail: 'Pull latest items from each source feed' },
    { title: 'Score', detail: 'Dedup vs ledger, score fit/SEO/interest, DataForSEO keyword check' },
    { title: 'Draft', detail: 'Write each selected article in house style' },
    { title: 'Verify', detail: 'Adversarially fact-check every stat/quote/DOI' },
    { title: 'QA', detail: 'Editorial + SEO + dedup gate; auto-fix minor issues; build approval sheet' },
  ],
};

// args: { maxDrafts?: number (default 3), sinceDays?: number (default 4) }
const cfg = args || {};
const MAX_DRAFTS = cfg.maxDrafts || 3;
const SINCE_DAYS = cfg.sinceDays || 4;

const REPO = '/Users/anastasia/Projects/xAID/xaid-landing';
const BRAIN = '/Users/anastasia/Projects/xAID/xaid-landing/content-pipeline';
const TEMPLATE = `${REPO}/src/pages/blog/AiDisclosurePatientTrust.tsx`;

// ---------- Schemas ----------
const ITEMS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          url: { type: 'string' },
          date: { type: 'string' },
          summary: { type: 'string' },
          source: { type: 'string' },
        },
        required: ['title', 'url', 'date', 'summary', 'source'],
      },
    },
  },
  required: ['items'],
};

const SHORTLIST_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          url: { type: 'string' },
          source: { type: 'string' },
          angle: { type: 'string', description: 'The distinct article angle for xAID' },
          articleType: { type: 'string', enum: ['research', 'ma-funding', 'product-fda', 'market-policy'] },
          targetKeyword: { type: 'string' },
          searchVolume: { type: ['number', 'null'] },
          keywordDifficulty: { type: ['number', 'null'] },
          fitScore: { type: 'number', description: '0-10 relevance to xAID product & positioning' },
          seoScore: { type: 'number', description: '0-10 rankable/AEO opportunity' },
          interestScore: { type: 'number', description: '0-10 how interesting/novel' },
          dedupOk: { type: 'boolean', description: 'true if NOT a duplicate of an existing ledger topic' },
          rationale: { type: 'string' },
        },
        required: ['title', 'url', 'source', 'angle', 'articleType', 'targetKeyword', 'searchVolume', 'keywordDifficulty', 'fitScore', 'seoScore', 'interestScore', 'dedupOk', 'rationale'],
      },
    },
  },
  required: ['items'],
};

const DRAFT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    slug: { type: 'string' },
    title: { type: 'string' },
    componentName: { type: 'string' },
    draftPath: { type: 'string', description: 'absolute path of the .tsx written under content-pipeline/drafts/' },
    targetKeyword: { type: 'string' },
    claims: {
      type: 'array',
      description: 'Every factual claim/stat/quote/DOI made in the article, for the fact-checker',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          claim: { type: 'string' },
          sourceUrl: { type: 'string' },
        },
        required: ['claim', 'sourceUrl'],
      },
    },
  },
  required: ['slug', 'title', 'componentName', 'draftPath', 'targetKeyword', 'claims'],
};

const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    overall: { type: 'string', enum: ['pass', 'fix-needed', 'fail'] },
    checkedClaims: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          claim: { type: 'string' },
          verdict: { type: 'string', enum: ['supported', 'unsupported', 'contradicted', 'unverifiable'] },
          note: { type: 'string' },
        },
        required: ['claim', 'verdict', 'note'],
      },
    },
    summary: { type: 'string' },
  },
  required: ['overall', 'checkedClaims', 'summary'],
};

const QA_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    gate: { type: 'string', enum: ['ready', 'needs-human', 'reject'] },
    voiceOk: { type: 'boolean' },
    ctaPresent: { type: 'boolean' },
    sourceLinksOk: { type: 'boolean' },
    faqMirrorsSchema: { type: 'boolean' },
    dedupOk: { type: 'boolean' },
    cannibalizationRisk: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
    fixesApplied: { type: 'array', items: { type: 'string' } },
    residualUncertainty: { type: 'string', description: 'Anything a human should look at — this is where the human 10% goes. Empty string if none.' },
    approvalSheet: { type: 'string', description: 'Short human-readable summary for the approver' },
  },
  required: ['gate', 'voiceOk', 'ctaPresent', 'sourceLinksOk', 'faqMirrorsSchema', 'dedupOk', 'cannibalizationRisk', 'fixesApplied', 'residualUncertainty', 'approvalSheet'],
};

// ---------- Phase 1: Ingest ----------
phase('Ingest');
const SOURCES = [
  {
    label: 'radiology-business',
    prompt: `Fetch the Radiology Business RSS feed and extract recent news items. Run this in bash: curl -sL -A "Mozilla/5.0 (compatible; xAID-newsbot/1.0)" --max-time 25 "https://radiologybusiness.com/rss.xml". Parse the XML. Return the most recent items from the last ${SINCE_DAYS} days (title, url from <link>, date from <pubDate>, a 1-2 sentence summary from <description> with HTML stripped, source="Radiology Business"). Skip items older than ${SINCE_DAYS} days. Return ALL qualifying items (up to 30).`,
  },
  {
    label: 'medtech-dive',
    prompt: `Fetch the MedTech Dive news feed and extract recent items relevant to medical imaging, radiology, diagnostics, or AI. Run in bash: curl -sL -A "Mozilla/5.0 (compatible; xAID-newsbot/1.0)" --max-time 25 "https://www.medtechdive.com/feeds/news/". Parse it. Return items from the last ${SINCE_DAYS} days that touch imaging/radiology/AI-diagnostics/relevant M&A (title, url, date, summary, source="MedTech Dive"). Drop clearly-irrelevant medtech (e.g., orthopedics-only, dental).`,
  },
  {
    label: 'auntminnie',
    prompt: `Get recent AuntMinnie industry news. The RSS at https://www.auntminnie.com/feed is Cloudflare-blocked to curl, so use the WebFetch tool on https://www.auntminnie.com/industry-news and extract the recent headlines with their URLs and a short summary. Return items from roughly the last ${SINCE_DAYS} days (title, url, date if shown else "recent", summary, source="AuntMinnie"). If WebFetch fails, return an empty items array — do not fabricate.`,
  },
];
const ingested = await parallel(
  SOURCES.map((s) => () => agent(s.prompt, { label: `ingest:${s.label}`, phase: 'Ingest', schema: ITEMS_SCHEMA, agentType: 'general-purpose' }))
);
const pool = ingested.filter(Boolean).flatMap((r) => r.items || []);
log(`Ingested ${pool.length} items from ${ingested.filter(Boolean).length}/${SOURCES.length} sources.`);
if (!pool.length) return { error: 'No items ingested', shortlist: [], drafts: [] };

// ---------- Phase 2: Dedup + Score (+ DataForSEO) ----------
phase('Score');
const scorePrompt = `You are the SEO + editorial scorer for the xAID radiology-AI blog.

xAID = B2B AI CT reporting: AI drafts structured CT reports, a radiologist reviews & signs. Audience: outpatient imaging centers, teleradiology companies, radiology groups, small/community hospitals. US market. Blog voice: evidence-led, specific, neutral/analytical, comparison-heavy.

Here is today's candidate pool (JSON):
${JSON.stringify(pool)}

Do ALL of this:
1. DEDUP: Read ${BRAIN}/ledger.json (bash: cat it). Drop any candidate whose topic is already covered by a published slug or seen url. Set dedupOk=false for near-duplicates.
2. FILTER for xAID relevance: keep items that fit the product/positioning (AI reporting, radiologist workflow, shortage, reimbursement, accuracy, patient trust, imaging M&A/PE, FDA-relevant). Drop off-topic (pure ortho/dental, unrelated funding, etc.). Prioritize RESEARCH breakdowns; include other types more sparingly.
3. For the ~8 best survivors, define a distinct ARTICLE ANGLE for xAID that does NOT duplicate the ledger, and pick a TARGET KEYWORD.
4. KEYWORD CHECK via DataForSEO: read the auth from ${BRAIN}/.env (bash: it has DATAFORSEO_AUTH_B64=...). For each target keyword, call keyword_suggestions to get real search_volume + keyword_difficulty. Example:
   curl -s -H "Authorization: Basic <B64>" -H "Content-Type: application/json" -X POST "https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live" -d '[{"keyword":"<seed>","location_code":2840,"language_code":"en","limit":30,"order_by":["keyword_info.search_volume,desc"]}]'
   Record searchVolume + keywordDifficulty (null if none found — that's fine, many are demand-gen/AEO plays).
5. SCORE each (fitScore, seoScore, interestScore 0-10) and give a one-line rationale.
Return the ranked shortlist (best first). Volume may be low in this niche — that's OK; weight fit + interest + low keyword difficulty, not raw volume.`;
const shortlist = await agent(scorePrompt, { label: 'score+keywords', phase: 'Score', schema: SHORTLIST_SCHEMA, agentType: 'general-purpose' });
const ranked = (shortlist.items || []).filter((x) => x.dedupOk);
const selected = ranked.slice(0, MAX_DRAFTS);
log(`Scored ${shortlist.items?.length || 0} candidates; ${ranked.length} pass dedup; drafting top ${selected.length}.`);
if (!selected.length) return { shortlist: shortlist.items || [], drafts: [] };

// ---------- Phase 3+4: Draft each, then fact-check each (pipeline, no barrier) ----------
phase('Draft');
const drafts = await pipeline(
  selected,
  (item) =>
    agent(
      `Write a full xAID blog article as a React .tsx page for this news item and angle:
${JSON.stringify(item)}

STRICT house-style contract — clone the structure of the reference file exactly: ${TEMPLATE} (read it first). That means:
- <Helmet> with title, meta description, canonical (https://xaid.ai/blog/<slug>), OG + Twitter tags, and THREE application/ld+json blocks: BreadcrumbList, BlogPosting, FAQPage.
- Dark hero section, optional key-stats grid on bg-white/5, article body in the light card (bg-white, bg-[#EBEBEB] wrapper) with the exact Tailwind classes from the template, a comparison table where useful, an FAQ that MIRRORS the FAQPage JSON-LD, a <BlogCTA .../> before Related, and a Related grid.
- Do NOT render or import Footer — the Footer is now global (rendered once in App.tsx). Adding it to the page causes a duplicate footer. Match the reference file exactly (it has no Footer).
- Use <Helmet defer={false}> and trailing-slash internal links (e.g. to="/blog/<slug>/") to match the current template.
- Import BlogCTA from '@/components/BlogCTA'.
- Voice: evidence-led, neutral, no first person, not salesy. Tie to xAID positioning (foundation models / ready-to-sign reports / radiologist-in-the-loop) naturally.
- SOURCE LINKS ARE MANDATORY: every stat/quote/DOI must link out (DOIs as https://doi.org/<doi>, coverage to the article url) with target="_blank" rel="noopener noreferrer". Add a "Source:" line at the end of the body.
- COMPETITORS: NEVER link out to a competitor / rival AI-vendor site (e.g. Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, etc.) — no backlinks to competitors. Name a specific competitor product only when it is factually unavoidable for the story, and even then cite a NEUTRAL authoritative source (the journal/DOI, CMS, or independent trade press), never the competitor's own PR page. Prefer neutral phrasing ("the tool the study examined") when the name isn't essential.
- Do NOT invent statistics or DOIs. Use WebSearch/WebFetch to gather the real figures from the source url and the underlying study; if a figure can't be verified, omit it. Round as reported.

Research the real facts first (WebSearch/WebFetch the item url + underlying study). Then write the component. Choose a PascalCase componentName and a kebab-case slug (target-keyword-driven, not duplicating existing slugs). Write the file to ${BRAIN}/drafts/<slug>.tsx (create the drafts dir if needed). Do NOT modify anything in ${REPO} and do NOT deploy. Return the metadata and the full list of factual claims you made with their source urls.`,
      { label: `draft:${item.articleType}`, phase: 'Draft', schema: DRAFT_SCHEMA, agentType: 'general-purpose' }
    ),
  (draft, item) =>
    agent(
      `Adversarially fact-check this drafted article. Be skeptical — your job is to catch unsupported or wrong claims before a human reviews it. This is a medical (YMYL) audience, so precision matters.

Draft file: ${draft.draftPath}
Original source item: ${JSON.stringify(item)}
Claims the writer says they made: ${JSON.stringify(draft.claims)}

For EACH claim: independently verify it against the cited source and, where possible, the primary study (use WebSearch/WebFetch). Mark supported / unsupported / contradicted / unverifiable with a short note. Specifically check: every number/percentage, every quote (is it verbatim & correctly attributed?), every DOI (does it resolve to the right paper?), and that no statistic was fabricated. Read the draft file itself (bash cat) to confirm the claims list is complete. Give an overall verdict: pass (all supported), fix-needed (minor issues, list them), or fail (fabrication/contradiction).`,
      { label: `verify:${draft.slug}`, phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'general-purpose' }
    ).then((v) => ({ ...draft, verdict: v, sourceItem: item })),
  (checked) =>
    agent(
      `You are the final QA + editorial + SEO gate for the xAID blog before a human approver sees this draft. Your job is to do the 90% of review so the human only spends the final 10% on genuine judgment calls.

Draft file: ${checked.draftPath}
Fact-check verdict already produced: ${JSON.stringify(checked.verdict)}
Target keyword: ${checked.targetKeyword}
Ledger (for dedup): read ${BRAIN}/ledger.json

Read the draft file (bash cat) and check ALL of:
- VOICE: evidence-led, neutral, no first person, not salesy, matches the house style.
- STRUCTURE: dark hero, light article card, FAQ that MIRRORS the FAQPage JSON-LD exactly, <BlogCTA/> present before Related, Related grid. The page must NOT render or import Footer (it is global in App.tsx now) — flag and REMOVE any <Footer/> or Footer import.
- SOURCE LINKS: every stat/quote/DOI links out (target="_blank" rel="noopener noreferrer"); a Source line exists.
- COMPETITORS: flag and REMOVE any outbound link to a competitor / rival AI-vendor site (Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, etc.) — re-cite to a neutral source or unlink. Competitors may be named only when factually unavoidable; prefer neutral phrasing otherwise.
- SEO: title/meta/canonical/slug consistent; slug is clean (flag if it contains filler like "draft"); confirm targetKeyword usage; judge cannibalization risk vs the ledger topics.
- DEDUP: not a duplicate of an existing published topic.
Auto-FIX minor issues directly in the draft file with the Edit/Write tools (typos, missing rel attributes, a filler slug, FAQ/JSON-LD mismatch, weak meta) and list what you changed in fixesApplied. Do NOT change facts.
If the fact-check verdict was 'fail' or you find an unfixable problem, set gate='reject'. If everything is solid, gate='ready'. If a human should look at a specific clinical/strategic nuance, gate='needs-human' and put it in residualUncertainty.
Write a concise approvalSheet: one-liner verdict + target keyword (with vol/KD if known) + what you verified + sources + any residual uncertainty.`,
      { label: `qa:${checked.slug}`, phase: 'QA', schema: QA_SCHEMA, agentType: 'general-purpose' }
    ).then((qa) => ({ ...checked, qa }))
);

const clean = drafts.filter(Boolean);
const ready = clean.filter((d) => d.qa?.gate === 'ready');
log(`Produced ${clean.length} drafts. Gate — ready: ${ready.length}, needs-human: ${clean.filter((d) => d.qa?.gate === 'needs-human').length}, reject: ${clean.filter((d) => d.qa?.gate === 'reject').length}. (fact-check pass: ${clean.filter((d) => d.verdict?.overall === 'pass').length}/${clean.length})`);

return {
  ranTs: cfg.ts || null,
  shortlist: shortlist.items || [],
  drafts: clean.map((d) => ({
    slug: d.slug,
    title: d.title,
    draftPath: d.draftPath,
    targetKeyword: d.targetKeyword,
    gate: d.qa?.gate,
    factcheckVerdict: d.verdict?.overall,
    approvalSheet: d.qa?.approvalSheet,
    residualUncertainty: d.qa?.residualUncertainty,
    fixesApplied: d.qa?.fixesApplied || [],
    cannibalizationRisk: d.qa?.cannibalizationRisk,
    flaggedClaims: (d.verdict?.checkedClaims || []).filter((c) => c.verdict !== 'supported'),
    sourceUrl: d.sourceItem?.url,
  })),
};
