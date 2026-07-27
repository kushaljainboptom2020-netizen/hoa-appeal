const fs = require("fs");
const path = require("path");
const topojson = require("topojson-client");
const { geoAlbersUsa, geoPath } = require("d3-geo");

const FIPS_TO_CODE = {
  "01": "AL",
  "02": "AK",
  "04": "AZ",
  "05": "AR",
  "06": "CA",
  "08": "CO",
  "09": "CT",
  "10": "DE",
  "12": "FL",
  "13": "GA",
  "15": "HI",
  "16": "ID",
  "17": "IL",
  "18": "IN",
  "19": "IA",
  "20": "KS",
  "21": "KY",
  "22": "LA",
  "23": "ME",
  "24": "MD",
  "25": "MA",
  "26": "MI",
  "27": "MN",
  "28": "MS",
  "29": "MO",
  "30": "MT",
  "31": "NE",
  "32": "NV",
  "33": "NH",
  "34": "NJ",
  "35": "NM",
  "36": "NY",
  "37": "NC",
  "38": "ND",
  "39": "OH",
  "40": "OK",
  "41": "OR",
  "42": "PA",
  "44": "RI",
  "45": "SC",
  "46": "SD",
  "47": "TN",
  "48": "TX",
  "49": "UT",
  "50": "VT",
  "51": "VA",
  "53": "WA",
  "54": "WV",
  "55": "WI",
  "56": "WY",
};

const topo = JSON.parse(
  fs.readFileSync(path.join(process.env.TEMP, "states-10m.json"), "utf8")
);
const states = topojson.feature(topo, topo.objects.states);
const projection = geoAlbersUsa().fitSize([960, 600], states);
const pathGen = geoPath(projection);

const paths = {};
for (const feature of states.features) {
  const code = FIPS_TO_CODE[feature.id];
  if (!code) continue;
  const d = pathGen(feature);
  if (d) paths[code] = d;
}

const codes = Object.keys(paths).sort();
console.log("states:", codes.length, codes.join(","));
if (codes.length !== 50) {
  console.error("Expected 50 states, got", codes.length);
  process.exit(1);
}

const out = `/** SVG path data for Albers USA projection (viewBox 0 0 960 600). */
export const US_STATE_PATHS: Record<string, string> = ${JSON.stringify(paths, null, 2)};

export const US_MAP_VIEWBOX = "0 0 960 600" as const;
`;

const outPath = path.join(process.cwd(), "lib/content/map/usStatePaths.ts");
fs.writeFileSync(outPath, out);
console.log("wrote", outPath, "bytes", Buffer.byteLength(out));
