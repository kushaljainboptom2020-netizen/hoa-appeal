/**
 * Branded MyHOAAppeal SVG infographic builders for guide educational assets.
 * Pure functions — no stock art; geometric layouts only.
 */

export const BRAND = {
  bg: "#020617",
  panel: "#0f172a",
  panelAlt: "#111827",
  border: "#1e293b",
  borderSoft: "#334155",
  text: "#f8fafc",
  muted: "#94a3b8",
  mutedSoft: "#64748b",
  accent: "#34d399",
  accentStrong: "#059669",
  accentDim: "#064e3b",
  amber: "#fbbf24",
  white: "#ffffff",
};

/**
 * @param {string} value
 */
export function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * @param {string} text
 * @param {number} maxChars
 * @returns {string[]}
 */
export function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars) {
      if (current) lines.push(current);
      current = word.length > maxChars ? `${word.slice(0, maxChars - 1)}…` : word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

/**
 * @param {string[]} lines
 * @param {number} x
 * @param {number} y
 * @param {number} lineHeight
 * @param {string} fill
 * @param {number} size
 * @param {string} [weight]
 * @param {string} [anchor]
 */
function tspans(lines, x, y, lineHeight, fill, size, weight = "400", anchor = "start") {
  return lines
    .map((line, i) => {
      const dy = i === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${escapeXml(line)}</tspan>`;
    })
    .join("");
}

/**
 * @param {{ title: string; kind: string; width: number; height: number; body: string }} opts
 */
function svgShell({ title, kind, width, height, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">MyHOAAppeal branded ${escapeXml(kind)} infographic</desc>
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.bg}"/>
      <stop offset="100%" stop-color="#0b1224"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BRAND.accent}"/>
      <stop offset="100%" stop-color="${BRAND.accentStrong}"/>
    </linearGradient>
    <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="${BRAND.border}" opacity="0.55"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#dotGrid)" opacity="0.35"/>
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="18" fill="${BRAND.panel}" stroke="${BRAND.border}" stroke-width="1.5"/>
  <circle cx="52" cy="56" r="10" fill="url(#accentGrad)"/>
  <path d="M48 56 l3 3 6-7" fill="none" stroke="${BRAND.bg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="72" y="52" fill="${BRAND.white}" font-family="system-ui,Segoe UI,sans-serif" font-size="15" font-weight="700">MyHOAAppeal</text>
  <text x="72" y="70" fill="${BRAND.muted}" font-family="system-ui,Segoe UI,sans-serif" font-size="11" font-weight="500">${escapeXml(kind.toUpperCase())}</text>
  ${body}
</svg>
`;
}

/**
 * Process flowchart — numbered vertical stages with connectors.
 * @param {{ title: string; heading: string; steps: { step: number; title: string; description: string; estimatedTime: string }[] }} data
 */
export function buildProcessSvg(data) {
  const steps = data.steps.slice(0, 6);
  const cardH = 92;
  const gap = 18;
  const width = 920;
  const left = 56;
  const cardW = width - 112;
  const headingLines = wrapText(data.heading, 70).slice(0, 2);
  const headingBlock = 36 + (headingLines.length - 1) * 20;
  const top = 88 + headingBlock + 12;
  const height = top + steps.length * (cardH + gap) + 36;

  const cards = steps
    .map((step, i) => {
      const y = top + i * (cardH + gap);
      const descLines = wrapText(step.description, 88).slice(0, 2);
      const connector =
        i < steps.length - 1
          ? `<line x1="${left + 28}" y1="${y + cardH}" x2="${left + 28}" y2="${y + cardH + gap}" stroke="${BRAND.accentStrong}" stroke-width="2" stroke-dasharray="4 4"/>`
          : "";
      return `
      <g>
        <rect x="${left}" y="${y}" width="${cardW}" height="${cardH}" rx="14" fill="${BRAND.panelAlt}" stroke="${BRAND.borderSoft}"/>
        <circle cx="${left + 28}" cy="${y + 28}" r="16" fill="url(#accentGrad)"/>
        <text x="${left + 28}" y="${y + 33}" text-anchor="middle" fill="${BRAND.bg}" font-family="system-ui,Segoe UI,sans-serif" font-size="14" font-weight="700">${step.step}</text>
        <text x="${left + 56}" y="${y + 26}" font-family="system-ui,Segoe UI,sans-serif">${tspans([step.title], left + 56, y + 26, 0, BRAND.text, 16, "650")}</text>
        <rect x="${cardW + left - 150}" y="${y + 14}" width="136" height="24" rx="8" fill="${BRAND.accentDim}" stroke="${BRAND.accentStrong}" stroke-width="1"/>
        <text x="${cardW + left - 82}" y="${y + 30}" text-anchor="middle" fill="${BRAND.accent}" font-family="system-ui,Segoe UI,sans-serif" font-size="10" font-weight="600">${escapeXml(wrapText(step.estimatedTime, 18)[0])}</text>
        <text x="${left + 56}" y="${y + 52}" font-family="system-ui,Segoe UI,sans-serif">${tspans(descLines, left + 56, y + 52, 18, BRAND.muted, 13)}</text>
        ${connector}
      </g>`;
    })
    .join("");

  const body = `
  <text x="56" y="88" font-family="system-ui,Segoe UI,sans-serif">${tspans(headingLines, 56, 88, 20, BRAND.text, 18, "700")}</text>
  ${cards}`;

  return svgShell({
    title: data.title,
    kind: "Process flowchart",
    width,
    height,
    body,
  });
}

/**
 * Comparison matrix — three columns, labeled rows.
 * @param {{ title: string; heading: string; columns: string[]; rows: { label: string; values: string[] }[] }} data
 */
export function buildComparisonSvg(data) {
  const cols = data.columns.slice(0, 3);
  const rows = data.rows.slice(0, 5);
  const width = 980;
  const left = 48;
  const labelW = 150;
  const colW = (width - left * 2 - labelW) / 3;
  const headerH = 64;
  const rowH = 78;
  const top = 120;
  const height = top + headerH + rows.length * rowH + 40;

  const colColors = [BRAND.accentDim, "#1e293b", "#3f1d1d"];
  const colBorders = [BRAND.accentStrong, BRAND.borderSoft, "#9a3412"];

  const headers = cols
    .map((col, i) => {
      const x = left + labelW + i * colW + 8;
      const lines = wrapText(col, 22).slice(0, 2);
      return `
      <rect x="${x}" y="${top}" width="${colW - 12}" height="${headerH}" rx="12" fill="${colColors[i]}" stroke="${colBorders[i]}"/>
      <text x="${x + (colW - 12) / 2}" y="${top + 28}" font-family="system-ui,Segoe UI,sans-serif">${tspans(lines, x + (colW - 12) / 2, top + 28, 16, BRAND.text, 13, "700", "middle")}</text>`;
    })
    .join("");

  const rowBlocks = rows
    .map((row, ri) => {
      const y = top + headerH + 12 + ri * rowH;
      const cells = row.values
        .slice(0, 3)
        .map((val, ci) => {
          const x = left + labelW + ci * colW + 8;
          const lines = wrapText(val, 24).slice(0, 3);
          return `
        <rect x="${x}" y="${y}" width="${colW - 12}" height="${rowH - 10}" rx="10" fill="${BRAND.panelAlt}" stroke="${BRAND.border}"/>
        <text x="${x + 12}" y="${y + 24}" font-family="system-ui,Segoe UI,sans-serif">${tspans(lines, x + 12, y + 24, 15, BRAND.muted, 12)}</text>`;
        })
        .join("");
      const labelLines = wrapText(row.label, 16).slice(0, 3);
      return `
      <text x="${left}" y="${y + 28}" font-family="system-ui,Segoe UI,sans-serif">${tspans(labelLines, left, y + 28, 15, BRAND.accent, 12, "650")}</text>
      ${cells}`;
    })
    .join("");

  const headingLines = wrapText(data.heading, 72).slice(0, 2);
  const body = `
  <text x="56" y="88" font-family="system-ui,Segoe UI,sans-serif">${tspans(headingLines, 56, 88, 20, BRAND.text, 18, "700")}</text>
  ${headers}
  ${rowBlocks}`;

  return svgShell({
    title: data.title,
    kind: "Comparison",
    width,
    height,
    body,
  });
}

/**
 * Timeline — vertical spine with duration badges.
 * @param {{ title: string; heading: string; events: { label: string; duration: string; notes: string }[] }} data
 */
export function buildTimelineSvg(data) {
  const events = data.events.slice(0, 6);
  const width = 920;
  const itemH = 100;
  const gap = 8;
  const top = 120;
  const height = top + events.length * (itemH + gap) + 36;
  const spineX = 72;

  const items = events
    .map((event, i) => {
      const y = top + i * (itemH + gap);
      const noteLines = wrapText(event.notes, 78).slice(0, 2);
      const durationLines = wrapText(event.duration, 16).slice(0, 1);
      const connector =
        i < events.length - 1
          ? `<line x1="${spineX}" y1="${y + 28}" x2="${spineX}" y2="${y + itemH + gap - 8}" stroke="${BRAND.accentStrong}" stroke-width="3"/>`
          : "";
      return `
      <g>
        ${connector}
        <circle cx="${spineX}" cy="${y + 20}" r="12" fill="url(#accentGrad)" stroke="${BRAND.bg}" stroke-width="3"/>
        <rect x="${spineX + 28}" y="${y}" width="${width - spineX - 76}" height="${itemH - 12}" rx="14" fill="${BRAND.panelAlt}" stroke="${BRAND.borderSoft}"/>
        <text x="${spineX + 48}" y="${y + 28}" font-family="system-ui,Segoe UI,sans-serif">${tspans([event.label], spineX + 48, y + 28, 0, BRAND.text, 15, "650")}</text>
        <rect x="${width - 196}" y="${y + 14}" width="128" height="26" rx="8" fill="${BRAND.accentDim}" stroke="${BRAND.accent}"/>
        <text x="${width - 132}" y="${y + 32}" text-anchor="middle" fill="${BRAND.accent}" font-family="system-ui,Segoe UI,sans-serif" font-size="11" font-weight="600">${escapeXml(durationLines[0])}</text>
        <text x="${spineX + 48}" y="${y + 54}" font-family="system-ui,Segoe UI,sans-serif">${tspans(noteLines, spineX + 48, y + 54, 17, BRAND.muted, 12)}</text>
      </g>`;
    })
    .join("");

  const headingLines = wrapText(data.heading, 70).slice(0, 2);
  const body = `
  <text x="56" y="88" font-family="system-ui,Segoe UI,sans-serif">${tspans(headingLines, 56, 88, 20, BRAND.text, 18, "700")}</text>
  ${items}`;

  return svgShell({
    title: data.title,
    kind: "Timeline",
    width,
    height,
    body,
  });
}

/**
 * Checklist — category panels with checkbox rows.
 * @param {{ title: string; heading: string; categories: { category: string; items: string[] }[] }} data
 */
export function buildChecklistSvg(data) {
  const cats = data.categories.slice(0, 4);
  const width = 960;
  const colGap = 16;
  const colW = (width - 96 - colGap) / 2;
  const cardH = 210;
  const top = 120;
  const rows = Math.ceil(cats.length / 2);
  const height = top + rows * (cardH + colGap) + 36;

  const cards = cats
    .map((cat, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 48 + col * (colW + colGap);
      const y = top + row * (cardH + colGap);
      const items = cat.items.slice(0, 3);
      const itemBlocks = items
        .map((item, ii) => {
          const iy = y + 58 + ii * 42;
          const lines = wrapText(item, 42).slice(0, 2);
          return `
          <rect x="${x + 18}" y="${iy}" width="18" height="18" rx="4" fill="none" stroke="${BRAND.accent}" stroke-width="2"/>
          <path d="M${x + 22} ${iy + 9} l3 3 6-7" fill="none" stroke="${BRAND.accentStrong}" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
          <text x="${x + 48}" y="${iy + 14}" font-family="system-ui,Segoe UI,sans-serif">${tspans(lines, x + 48, iy + 14, 14, BRAND.muted, 12)}</text>`;
        })
        .join("");
      const catLines = wrapText(cat.category, 36).slice(0, 2);
      return `
      <g>
        <rect x="${x}" y="${y}" width="${colW}" height="${cardH}" rx="16" fill="${BRAND.panelAlt}" stroke="${BRAND.borderSoft}"/>
        <rect x="${x}" y="${y}" width="6" height="${cardH}" rx="3" fill="url(#accentGrad)"/>
        <text x="${x + 22}" y="${y + 32}" font-family="system-ui,Segoe UI,sans-serif">${tspans(catLines, x + 22, y + 32, 16, BRAND.text, 14, "700")}</text>
        ${itemBlocks}
      </g>`;
    })
    .join("");

  const headingLines = wrapText(data.heading, 72).slice(0, 2);
  const body = `
  <text x="56" y="88" font-family="system-ui,Segoe UI,sans-serif">${tspans(headingLines, 56, 88, 20, BRAND.text, 18, "700")}</text>
  ${cards}`;

  return svgShell({
    title: data.title,
    kind: "Checklist",
    width,
    height,
    body,
  });
}

/**
 * @param {string} slug
 * @param {"process"|"comparison"|"timeline"|"checklist"} kind
 */
export function infographicHref(slug, kind) {
  return `/guides/infographics/${slug}-${kind}.svg`;
}
