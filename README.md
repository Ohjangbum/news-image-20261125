# World News — Wednesday, 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Ohjangbum/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Ohjangbum/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A one-page newspaper front page summing up the world's news of Wednesday,
25 November 2026, built for make.fun's
[news-image-20261125](https://make.fun/bounty/news-image-20261125) bounty.

## What's in the image

- **Lead — Ukraine:** Ukraine hits a Russian cargo ship in the Gulf of Finland;
  Zelenskiy presses NATO for membership and more air defence; Kyiv seeks
  €115 billion in foreign aid for 2027.
- **Gaza:** Israeli strikes kill a senior Hamas security chief; seven killed.
- **Riyadh:** Houthi drone hits the PIF Tower, Riyadh's tallest tower;
  eleven wounded; Houthis push toward Aden; Britain sanctions the Houthis.
- **United States:** Huawei convicted in a US criminal trial over its Iran
  business (trade-secret theft).
- **France:** Former president Sarkozy and his wife Carla Bruni ordered to
  trial in the Libya corruption case.
- **Climate — COP31, Antalya:** climate talks collapse without a deal.
- **Sport:** Real Madrid thrash PSV 5–1 (Bellingham stunner, Mbappé brace).
- **Indonesia:** the Vice-President resigns amid political strain.
- **In brief:** Russian jets enter South Korea's air defence zone; Iranian
  singer Parastoo Ahmadi sentenced to 74 lashes over a YouTube concert
  performed without a hijab.

## How it was made

The page is drawn programmatically so every word is exact — no AI image
generator, so no garbled text. `build/page.html` lays out the front page
(masthead, lead story, four-story grid, COP31 band, sport/Indonesia strip,
in-brief line) and `build/render.mjs` screenshots it at 1024×1024 with
Playwright to `entry.png` (170,684 bytes, PNG).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png, byte-identical on every run
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. No network.

## License

MIT — see `LICENSE`.
