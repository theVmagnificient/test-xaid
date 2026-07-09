export const meta = {
  name: 'evergreen-seo-pipeline',
  description: 'Draft one evergreen SEO pillar article per day from the keyword backlog (real searched keywords, DataForSEO-verified), fact-check every claim. Outputs review-ready drafts to content-pipeline/drafts/ — NEVER deploys.',
  phases: [
    { title: 'Pick', detail: 'Choose top queued keyword from the backlog, dedup vs ledger' },
    { title: 'Draft', detail: 'Write the pillar article in house style' },
    { title: 'Verify', detail: 'Adversarially fact-check every stat/quote/DOI' },
    { title: 'QA', detail: 'Editorial + SEO + dedup gate; mark keyword used' },
  ],
};

// args: { maxDrafts?: number (default 1) }
const cfg = args || {};
const MAX_DRAFTS = cfg.maxDrafts || 1;

const REPO = '/Users/anastasia/Projects/xAID/xaid-landing';
const BRAIN = '/Users/anastasia/Projects/xAID/xaid-landing/content-pipeline';
const TEMPLATE = `${REPO}/src/pages/blog/AiDisclosurePatientTrust.tsx`;

// ---------- Schemas (mirror daily-news-pipeline) ----------
const PICK_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    picks: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          keyword: { type: 'string' },
          volume: { type: ['number', 'null'] },
          kd: { type: ['number', 'null'] },
          angle: { type: 'string' },
          cluster: { type: 'array', items: { type: 'string' } },
          dedupOk: { type: 'boolean', description: 'true if NOT already covered by a ledger/pending topic' },
          rationale: { type: 'string' },
        },
        required: ['keyword', 'volume', 'kd', 'angle', 'cluster', 'dedupOk', 'rationale'],
      },
    },
    backlogLow: { type: 'boolean', description: 'true if fewer than 5 queued entries remain AFTER these picks' },
  },
  required: ['picks', 'backlogLow'],
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
    keywordTargetingOk: { type: 'boolean', description: 'target keyword present in title, H1, meta description, first paragraph, and at least one H2 — naturally, no stuffing' },
    cannibalizationRisk: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
    fixesApplied: { type: 'array', items: { type: 'string' } },
    residualUncertainty: { type: 'string', description: 'Anything a human should look at. Empty string if none.' },
    approvalSheet: { type: 'string', description: 'Short human-readable summary for the approver' },
  },
  required: ['gate', 'voiceOk', 'ctaPresent', 'sourceLinksOk', 'faqMirrorsSchema', 'dedupOk', 'keywordTargetingOk', 'cannibalizationRisk', 'fixesApplied', 'residualUncertainty', 'approvalSheet'],
};

// ---------- Phase 1: Pick ----------
phase('Pick');
const picked = await agent(
  `Pick the next evergreen SEO article keyword(s) for the xAID blog.

Read these three files (bash cat):
1. ${BRAIN}/keyword-backlog.json — the priority queue. Candidates are entries with status "queued", in array order (order = founder's priority).
2. ${BRAIN}/ledger.json — 'published' topics already live.
3. ${BRAIN}/automation/state/pending.json — drafts awaiting the founder (do NOT duplicate their topics).

Choose the TOP ${MAX_DRAFTS} queued entr${MAX_DRAFTS === 1 ? 'y' : 'ies'} that: (a) is not already covered by a published/pending topic (check by MEANING, not just slug — e.g. a "teleradiology policy watchlist" news post does NOT cover a "what is teleradiology" pillar, but a second salary guide WOULD duplicate radiologist-salary-transparency-2026); (b) has no high cannibalization risk with an existing page (note /ai-vs-teleradiology and /for-teleradiology-companies are top-level pages — pillars must complement, not compete). Skip entries whose angle says to do them later if their prerequisites are missing, and take the next one instead.

Do NOT modify any files in this phase. Set backlogLow=true if fewer than 5 queued entries would remain after your pick(s). If nothing is eligible, return an empty picks array.`,
  { label: 'pick:keyword', phase: 'Pick', schema: PICK_SCHEMA, agentType: 'general-purpose' }
);

const selected = (picked.picks || []).filter((p) => p.dedupOk).slice(0, MAX_DRAFTS);
if (picked.backlogLow) log('⚠️ keyword backlog is running low (<5 queued) — replenish soon');
if (!selected.length) return { drafts: [], backlogLow: picked.backlogLow };

// ---------- Phase 2+3: Draft each, then fact-check each (pipeline, no barrier) ----------
phase('Draft');
const drafts = await pipeline(
  selected,
  (item) =>
    agent(
      `Write a full xAID EVERGREEN SEO pillar article as a React .tsx page for this target keyword:
${JSON.stringify(item)}

This is NOT a news article. It is a comprehensive, durable reference piece built to rank for the target keyword and its cluster variants. 1,500–2,200 words of body content.

STRICT house-style contract — clone the structure of the reference file exactly: ${TEMPLATE} (read it first). That means:
- <Helmet> with title, meta description, canonical (https://xaid.ai/blog/<slug>), OG + Twitter tags, and THREE application/ld+json blocks: BreadcrumbList, BlogPosting, FAQPage.
- SEO targeting is the point: target keyword in the <title> (≤60 chars), meta description (120–160 chars), H1, first paragraph, and at least one H2 — all NATURAL, no stuffing. Work the cluster variants into H2s/H3s where they fit as real questions/sections. The FAQ section should answer the actual questions people search (use the cluster list).
- Voice: evidence-led, neutral, no first person, not salesy. Tie to xAID positioning (foundation models / ready-to-sign reports / radiologist-in-the-loop) naturally.
- SOURCE LINKS ARE MANDATORY: every stat/figure/claim must link to an authoritative source (peer-reviewed journals via https://doi.org/<doi>, ACR, AAMC, CMS, FDA, established trade press) with target="_blank" rel="noopener noreferrer". Add a "Source:" line at the end of the body. Evergreen articles live or die on defensible numbers — if you cannot verify a figure via WebSearch/WebFetch right now, OMIT it.
- COMPETITORS: NEVER link out to a competitor / rival AI-vendor site (e.g. Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, etc.). Name a specific competitor product only when factually unavoidable, citing a NEUTRAL authoritative source.
- INTERNAL LINKS: weave in 3–6 internal links to existing related pages/articles (read ${REPO}/src/data/blog-posts.ts for what exists) — a pillar's job is to be a hub. Use trailing-slash hrefs.
- HARD SIGNING RULE: xAID NEVER signs reports. Correct patterns: "ready-to-sign", "your radiologist signs", "in-house review on every preliminary — final signature stays with your reading radiologist". Never "a radiologist reviews and signs" in xAID context.
- Do NOT invent statistics or DOIs. Research the real facts FIRST (WebSearch/WebFetch: the underlying studies, ACR/AAMC data, official sources). Round as reported.

Choose a PascalCase componentName and a kebab-case slug driven by the target keyword (not duplicating existing slugs — check ${REPO}/src/data/blog-posts.ts). Write the file to ${BRAIN}/drafts/<slug>.tsx. Do NOT modify anything in ${REPO} and do NOT deploy. Return the metadata and the full list of factual claims you made with their source urls.`,
      { label: `draft:${item.keyword}`, phase: 'Draft', schema: DRAFT_SCHEMA, agentType: 'general-purpose' }
    ),
  (draft, item) =>
    agent(
      `Adversarially fact-check this drafted article. Be skeptical — your job is to catch unsupported or wrong claims before a human reviews it. This is a medical (YMYL) audience, so precision matters.

Draft file: ${draft.draftPath}
Target keyword context: ${JSON.stringify(item)}
Claims the writer says they made: ${JSON.stringify(draft.claims)}

For EACH claim: independently verify it against the cited source and, where possible, the primary study (use WebSearch/WebFetch; if a fetch is blocked, fall back to bash curl -sL with a browser User-Agent — curl is allowed; the r.jina.ai/<url> reader proxy defeats most Cloudflare walls; Crossref API and PubMed eutils work for DOIs). Mark supported / unsupported / contradicted / unverifiable with a short note. Specifically check: every number/percentage, every quote (verbatim & correctly attributed?), every DOI (resolves to the right paper?), and that no statistic was fabricated. Absolute claims ("no AI system is approved...") must be qualified by jurisdiction (US/FDA vs EU/CE) — flag any that aren't. Read the draft file itself (bash cat) to confirm the claims list is complete. Give an overall verdict: pass (all supported), fix-needed (minor issues, list them), or fail (fabrication/contradiction).

HARD RULE — no web, no verdict: FIRST prove you have live web access (e.g. curl -sI https://doi.org or a WebFetch of a cited source). If WebSearch, WebFetch AND curl are ALL blocked or failing, you CANNOT fact-check: mark every externally-sourced claim 'unverifiable' and return overall='fail' with a summary starting "WEB VERIFICATION UNAVAILABLE — rerun required". NEVER return pass or fix-needed based only on internal consistency or your own knowledge.`,
      { label: `verify:${draft.slug}`, phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'general-purpose' }
    ).then((v) => ({ ...draft, verdict: v, sourceItem: item })),
  (checked) =>
    agent(
      `You are the final QA + editorial + SEO gate for the xAID blog before a human approver sees this draft. Your job is to do the 90% of review so the human only spends the final 10% on genuine judgment calls.

Draft file: ${checked.draftPath}
Fact-check verdict already produced: ${JSON.stringify(checked.verdict)}
Target keyword: ${checked.targetKeyword} (cluster: ${JSON.stringify(checked.sourceItem.cluster)})
Ledger (for dedup): read ${BRAIN}/ledger.json

Read the draft file (bash cat) and check ALL of:
- VOICE: evidence-led, neutral, no first person, not salesy, matches the house style.
- STRUCTURE: dark hero, light article card, FAQ that MIRRORS the FAQPage JSON-LD exactly, <BlogCTA/> present before Related, Related grid. The page must NOT render or import Footer (it is global in App.tsx) — flag and REMOVE any <Footer/> or Footer import.
- KEYWORD TARGETING (this is an SEO pillar — be strict): target keyword in <title> (≤60 chars), meta description (120–160 chars), H1, first paragraph, and ≥1 H2, all natural; cluster variants worked into section headings/FAQ; slug matches the keyword; internal links to 3–6 existing pages present with trailing slashes and all pointing at routes that actually exist (check ${REPO}/src/routes.tsx — a /blog/-prefixed link to a top-level page like /how-ai-ct-reporting-works/ is a bug).
- SOURCE LINKS: every stat/figure links out (target="_blank" rel="noopener noreferrer"); a Source line exists.
- COMPETITORS: flag and REMOVE any outbound link to a competitor / rival AI-vendor site — re-cite to a neutral source or unlink.
- SIGNING RULE: no "reviews and signs" phrasing in xAID context; "ready-to-sign" / "your radiologist signs" patterns only.
- DEDUP + CANNIBALIZATION: not a duplicate of a published topic; judge cannibalization vs existing pages (especially /ai-vs-teleradiology, /for-teleradiology-companies, ai-radiology-glossary).
Auto-FIX minor issues directly in the draft file with the Edit/Write tools (typos, missing rel attributes, FAQ/JSON-LD mismatch, weak meta, broken internal link paths) and list what you changed in fixesApplied. Do NOT change facts.
If the fact-check verdict was 'fail' or you find an unfixable problem, set gate='reject'. If everything is solid, gate='ready'. If a human should look at a specific clinical/strategic nuance, gate='needs-human' and put it in residualUncertainty.
Write a concise approvalSheet: one-liner verdict + target keyword with vol/KD + what you verified + sources + any residual uncertainty.`,
      { label: `qa:${checked.slug}`, phase: 'QA', schema: QA_SCHEMA, agentType: 'general-purpose' }
    ).then((qa) => ({ ...checked, qa }))
);

const clean = drafts.filter(Boolean);

// ---------- Mark used keywords in the backlog ----------
const survivors = clean.filter((d) => d.qa?.gate === 'ready' || d.qa?.gate === 'needs-human');
if (survivors.length) {
  await agent(
    `Update ${BRAIN}/keyword-backlog.json: for each of these keywords, set the matching queue entry's status to "used" and add "usedAt": "<today's date YYYY-MM-DD>" and "slug": "<the slug>". Keywords → slugs: ${JSON.stringify(survivors.map((d) => ({ keyword: d.targetKeyword, slug: d.slug })))}. Match entries by their "keyword" field (the pick may have come from a cluster — match the entry whose keyword or cluster contains the target). Preserve all other entries and formatting (2-space indent). Use the Edit tool precisely; do not rewrite unrelated entries.`,
    { label: 'backlog:mark-used', phase: 'QA', agentType: 'general-purpose' }
  );
}

log(`Evergreen: ${clean.length} draft(s). Gate — ready: ${clean.filter((d) => d.qa?.gate === 'ready').length}, needs-human: ${clean.filter((d) => d.qa?.gate === 'needs-human').length}, reject: ${clean.filter((d) => d.qa?.gate === 'reject').length}. (fact-check pass: ${clean.filter((d) => d.verdict?.overall === 'pass').length}/${clean.length})`);

return {
  backlogLow: picked.backlogLow,
  drafts: clean.map((d) => ({
    slug: d.slug,
    title: d.title,
    componentName: d.componentName,
    draftPath: d.draftPath,
    targetKeyword: d.targetKeyword,
    volume: d.sourceItem.volume,
    kd: d.sourceItem.kd,
    gate: d.qa?.gate,
    factcheckVerdict: d.verdict?.overall,
    approvalSheet: d.qa?.approvalSheet,
    residualUncertainty: d.qa?.residualUncertainty,
    fixesApplied: d.qa?.fixesApplied || [],
    cannibalizationRisk: d.qa?.cannibalizationRisk,
  })),
};
