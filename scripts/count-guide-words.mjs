import { GUIDE_ARTICLES, countGuideWords } from "../lib/content/guides/index.ts";

const counts = GUIDE_ARTICLES.map((g) => ({
  slug: g.slug,
  words: countGuideWords(g),
})).sort((a, b) => a.words - b.words);

for (const c of counts) {
  console.log(`${c.slug}: ${c.words}`);
}
console.log(
  `\nMin: ${counts[0].slug} ${counts[0].words}, Max: ${counts[counts.length - 1].slug} ${counts[counts.length - 1].words}`
);
