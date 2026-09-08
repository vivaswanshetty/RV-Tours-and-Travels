import fs from "fs";
import path from "path";
import assert from "assert";

// Runnable self-check for package carousel image assets
const content = fs.readFileSync("./lib/constants.ts", "utf8");
const srcMatches = [...content.matchAll(/src:\s*["'](\/[^"']+)["']/g)].map((m) => m[1]);
const imageSrcMatches = [...content.matchAll(/imageSrc:\s*["'](\/[^"']+)["']/g)].map((m) => m[1]);
const allPaths = [...new Set([...srcMatches, ...imageSrcMatches])];

assert(allPaths.length > 0, "No image paths found in lib/constants.ts");

for (const p of allPaths) {
  const localPath = path.join("./public", p);
  assert(fs.existsSync(localPath), `Package image missing from public/: ${localPath}`);
}

console.log(`Self-check passed: All ${allPaths.length} package image paths exist on disk.`);
