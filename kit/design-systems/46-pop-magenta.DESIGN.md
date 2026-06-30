# DESIGN.md — ポップ・マゼンタ（Pop Magenta）

> **これは何**：スライドの「配色・フォント・型」をひとまとめにした正典です。`make-slides` の `DESIGN.md` としてコピーするか、
> エージェントに「この DESIGN.md に従ってスライドを作って」と渡すだけで、この見た目で統一されたデッキになります。
> 番号 46 / 50 ／ カテゴリ: ポップ ／ モード: ライト（明背景）

## 使いどころ
- インパクト・キャンペーン
- 雰囲気：派手・元気
- モチーフ：マゼンタの大胆な面

## カラートークン（意味ベース）
| トークン | 役割 | 値 |
|---|---|---|
| `--brand` | 主色（見出し・強調） | `#C026A3` |
| `--brand-deep` | 主色の濃い版（小見出し・帯） | `#9D1C84` |
| `--accent` | 差し色（番号・枠線・バッジ・矢印） | `#F25FD0` |
| `--accent-deep` | 差し色の濃い版（バッジ影など） | `#D633B0` |
| `--bg` / `--paper` | 背景 / カード白面 | `#FDF2FB` / `#FFFFFF` |
| `--ink` / `--ink-mid` | 本文 / 補助テキスト | `#5E1450` / `#8A4079` |
| `--ink-sub` | 極淡（**罫線など非テキスト専用**） | `#C28BB6` |
| `--on-accent` | accent 地の上に乗せる文字色 | `#5E1450` |

## そのまま貼り付け（`:root`）
スライドHTMLの `:root{ ... }` をこのブロックで丸ごと置き換えてください。

```css
:root{
  --brand:#C026A3; --brand-deep:#9D1C84; --brand-soft:rgba(192,38,163,0.08); --brand-line:rgba(192,38,163,0.22);
  --accent:#F25FD0; --accent-deep:#D633B0; --accent-soft:rgba(242,95,208,0.16);
  --bg:#FDF2FB; --paper:#FFFFFF; --ink:#5E1450; --ink-mid:#8A4079; --ink-sub:#C28BB6;
  --line:rgba(94,20,80,0.12); --on-accent:#5E1450; --canvas:#F1DCEC;
  --head:'M PLUS Rounded 1c';
}
```

> フォント（見出し）：**M PLUS Rounded 1c**。Google Fonts を `<head>` に追加：
> `<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap" rel="stylesheet">`
> 本文は Noto Sans JP 推奨。

## スライドの型（このテーマで使う基本レイアウト）
1. 表紙（大見出し＋一言サブ）
2. 結論（TL;DR・3カード）
3. 悩み（箇条書き）
4. 〇〇とは（定義・比喩）
5. 全体像（フロー図 ① → ② → ③ → ④）
6. 3本柱（カード×3）
7. before / after（2パネル比較）
8. 比較表（見出しは ink 地＋白字）
9. 使い方（悩み → こう頼む）
10. まとめ＋CTA・出典

## コントラスト規約（必守）
- `--accent`／`--accent-deep` は **枠線・地色・バッジ専用**。**小さい文字色に使わない**。
- 文字色は `--ink` / `--ink-mid` / `--brand-deep`（背景に対して AA を確保）。
- バッジ・ボタン・番号は **accent 地 ＋ `--on-accent` の文字**（このテーマでは `#5E1450`）。
- `--ink-sub` は罫線・区切りなど**非テキスト専用**。本文・キャプションには使わない。
- 比較表の見出しは **ink 地＋白文字**。

## 禁止表現（誇張・断定保証）
`必ず / 絶対 / 確実 / 裏技 / 神 / ヤバい / 衝撃 / 100%稼げる` は使わない。効果は中立に（「〜も目指せる」）。

## 1行で使う
```
このフォルダの make-slides スキルで、デザインは design-systems/46-pop-magenta.DESIGN.md を使ってスライドを作って。テーマは「◯◯」。
```
