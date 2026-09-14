// Run with: node scripts/generate-social-assets.mjs
// sharp is provided by the installed Next.js dependencies. The generated files
// are committed, so asset generation is not required during deployment.
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const socialSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf8ff"/>
  <rect x="0" y="0" width="16" height="630" fill="#6d28d9"/>
  <rect x="914" width="286" height="630" fill="#6d28d9"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <text x="80" y="117" font-size="18" font-weight="700" letter-spacing="4" fill="#6d28d9">PORTFOLIO</text>
    <text x="76" y="271" font-size="76" font-weight="700" letter-spacing="-3" fill="#241638">Olivia Nalwoga</text>
    <text x="80" y="338" font-size="36" font-weight="500" fill="#5b21b6">Data Analyst | Data Science</text>
    <line x1="80" y1="386" x2="832" y2="386" stroke="#ddd3f2" stroke-width="2"/>
    <text x="80" y="445" font-size="27" fill="#514260">Python · SQL · Statistics</text>
    <text x="80" y="554" font-size="21" fill="#68577a">olivia-nalwoga.github.io</text>
  </g>
  <g transform="translate(969 227) scale(2.75)" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="11" y="19" width="17" height="26" rx="8.5"/>
    <path d="M37 45V19l16 26V19"/>
  </g>
</svg>`;

await sharp(Buffer.from(socialSvg))
  .png()
  .toFile(new URL("public/og-image.png", root).pathname);

const icon = await readFile(new URL("app/icon.svg", root));
const sizes = [16, 32, 48, 64];
const frames = await Promise.all(
  sizes.map((size) => sharp(icon).resize(size, size).png().toBuffer()),
);

// ICO can contain PNG frames. Include common sizes for crisp browser tab icons.
const directory = Buffer.alloc(6 + frames.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(frames.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(
  new URL("app/favicon.ico", root),
  Buffer.concat([directory, ...frames]),
);
console.log("Generated public/og-image.png (1200×630) and app/favicon.ico.");
