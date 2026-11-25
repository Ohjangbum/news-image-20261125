// News-image entry (Node 22, standard library only).
//
// The front page itself is built in this repository: build/page.html lays out
// the day's news as a newspaper page and build/render.mjs screenshots it to
// entry.png with Playwright. This program only moves those finished bytes
// into the grader's output directory, so two runs always agree byte for byte.
// The output file is always named entry.png, whatever the format of the
// bytes it carries (here: a PNG of 1024 by 1024 pixels, under 1 MiB).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
