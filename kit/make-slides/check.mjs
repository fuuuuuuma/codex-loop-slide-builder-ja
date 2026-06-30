// check.mjs — スライドの「はみ出し」を自動検出する評価役（ループの心臓）
//
// 使い方:
//   1) 一度だけ:  npm i -D playwright && npx playwright install chromium
//   2) 検証:      node check.mjs ./slides.html
//
// 出力:
//   - はみ出しているスライド番号と超過px
//   - assets/ に各スライドのスクショ（目視用）
//   - 終了コード: はみ出しが無ければ 0 / あれば 1（ループの停止条件に使える）
//
// 仕組み: 各 .slide を表示して scrollHeight が clientHeight を超えていないかを測る。
//        装飾の円（.coin など position:absolute で枠外に出る要素）は除外する。

import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';

const file = process.argv[2] || './slides.html';
const url = 'file://' + path.resolve(file);
const outDir = path.resolve(path.dirname(file), 'assets');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(url, { waitUntil: 'networkidle' });

const count = await page.evaluate(() => document.querySelectorAll('.slide').length);
const issues = [];

for (let i = 0; i < count; i++) {
  // i番目だけ表示して計測
  const over = await page.evaluate((n) => {
    const ss = [...document.querySelectorAll('.slide')];
    ss.forEach((s, k) => s.style.display = k === n ? 'flex' : 'none');
    const s = ss[n];
    // 装飾（position:absolute で枠外に出る要素）を一時的に隠して本文だけ測る
    const deco = [...s.querySelectorAll('.coin,.dots,.deco')];
    const prev = deco.map(d => d.style.display);
    deco.forEach(d => d.style.display = 'none');
    const o = s.scrollHeight - s.clientHeight;
    deco.forEach((d, k) => d.style.display = prev[k]);
    return o;
  }, i);

  if (over > 2) issues.push({ slide: i + 1, overflowPx: over });
  await page.screenshot({ path: path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`) });
}

await browser.close();

if (issues.length === 0) {
  console.log(`DONE. ${count} slides, issues: []  ✅ はみ出しゼロ`);
  process.exit(0);
} else {
  console.log(`DONE. ${count} slides, issues:`);
  for (const it of issues) console.log(`  - スライド ${it.slide}: +${it.overflowPx}px はみ出し`);
  console.log('→ 該当スライドの文字量を減らすか、レイアウトを調整してください。');
  process.exit(1);
}
