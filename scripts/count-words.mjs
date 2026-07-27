import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Dynamic import profiles
const mod = await import("../lib/content/states/profiles.generated.ts");
const { buildStateLegalContent } = await import("../lib/content/states/buildContent.ts");
const { countStateContentWords } = await import("../lib/content/states/types.ts");
const { getStateByCode } = await import("../lib/seo/statePages.ts");

const profiles = mod.STATE_CONTENT_PROFILES;
const counts = [];
for (const [code, profile] of Object.entries(profiles)) {
  const config = getStateByCode(code);
  const content = buildStateLegalContent(config, profile);
  counts.push({ code, words: countStateContentWords(content) });
}
counts.sort((a, b) => a.words - b.words);
for (const c of counts) console.log(`${c.code}: ${c.words}`);
console.log(`\nMin: ${counts[0].code} ${counts[0].words}, Max: ${counts[counts.length-1].code} ${counts[counts.length-1].words}`);
