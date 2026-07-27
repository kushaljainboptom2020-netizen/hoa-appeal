#!/usr/bin/env node
/** Writes scripts/state-profile-expansions.mjs from build-expansion-content.mjs */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { buildAllExpansions } from "./build-expansion-content.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "state-profile-expansions.mjs");
const expansions = buildAllExpansions();

const content = `/** Unique per-state prose expansions merged at generation time. */
export const STATE_PROFILE_EXPANSIONS = ${JSON.stringify(expansions, null, 2)};
`;

writeFileSync(OUT, content, "utf8");
console.log(`Wrote ${OUT} (${Object.keys(expansions).length} states)`);
