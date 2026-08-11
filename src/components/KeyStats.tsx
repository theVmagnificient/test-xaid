export interface KeyStat {
  /** The headline figure. Keep it SHORT — the tile is only ~140px wide at 1440px, so a long
   *  unbreakable word ("Hundreds") overflows and fails `bun run guard`. Prefer a number,
   *  percentage, ratio or date: '37.1%', '68.1% vs 50%', '77,626', 'Aug 5, 2026'. */
  stat: string;
  /** Under ~28 characters. Avoid unbreakable compounds like 'Top-comprehensiveness'. */
  label: string;
  /** Optional source/qualifier line. */
  sub?: string;
}

/**
 * Reusable "key stats" band for blog articles — the 4-up figure grid that sits between the
 * header and the article body.
 *
 * Extracted 2026-08-11 after this markup had been copy-pasted into 40 articles: none of the
 * copies had `break-words`, so a single long word in one generated article overflowed its tile,
 * failed the publish guard, and stalled the content pipeline for days. Fixing it meant a
 * sed across 40 files. Use this component in new articles so the next change is one file.
 */
const KeyStats = ({ items }: { items: KeyStat[] }) => (
  <section className="section-padding bg-white/5">
    <div className="container-xaid max-w-3xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((s, i) => (
          <div
            key={`${s.stat}-${i}`}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-medium text-xaid-blue mb-1 break-words">{s.stat}</div>
            <div className="text-white text-xs font-medium mb-1 break-words">{s.label}</div>
            {s.sub && <div className="text-white/60 text-xs">{s.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyStats;
