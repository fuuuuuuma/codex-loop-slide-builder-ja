# DESIGN.md — ターミナル・グリーン（Terminal Green）

> **これは何**：スライドの「配色・フォント・型」をひとまとめにした正典です。`make-slides` の `DESIGN.md` としてコピーするか、
> エージェントに「この DESIGN.md に従ってスライドを作って」と渡すだけで、この見た目で統一されたデッキになります。
> 番号 29 / 50 ／ カテゴリ: ダーク ／ モード: ダーク（暗背景）

## 使いどころ
- エンジニア・CLI・実演
- 雰囲気：硬派・玄人
- モチーフ：端末風の緑

## カラートークン（意味ベース）
| トークン | 役割 | 値 |
|---|---|---|
| `--brand` | 主色（見出し・強調） | `#4ADE80` |
| `--brand-deep` | 主色の濃い版（小見出し・帯） | `#86EFAC` |
| `--accent` | 差し色（番号・枠線・バッジ・矢印） | `#22C55E` |
| `--accent-deep` | 差し色の濃い版（バッジ影など） | `#16A34A` |
| `--bg` / `--paper` | 背景 / カード白面 | `#0A140E` / `#112017` |
| `--ink` / `--ink-mid` | 本文 / 補助テキスト | `#E6F2EA` / `#9CC0A8` |
| `--ink-sub` | 極淡（**罫線など非テキスト専用**） | `#5E7A68` |
| `--on-accent` | accent 地の上に乗せる文字色 | `#0A140E` |

## そのまま貼り付け（`:root`）
スライドHTMLの `:root{ ... }` をこのブロックで丸ごと置き換えてください。

```css
:root{
  --brand:#4ADE80; --brand-deep:#86EFAC; --brand-soft:rgba(74,222,128,0.14); --brand-line:rgba(74,222,128,0.3);
  --accent:#22C55E; --accent-deep:#16A34A; --accent-soft:rgba(34,197,94,0.16);
  --bg:#0A140E; --paper:#112017; --ink:#E6F2EA; --ink-mid:#9CC0A8; --ink-sub:#5E7A68;
  --line:rgba(255,255,255,.10); --on-accent:#0A140E; --canvas:#060D09;
  --head:'Noto Sans JP';
}
```

> フォント（見出し）：**Noto Sans JP**。Google Fonts を `<head>` に追加：
> `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">`
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
- バッジ・ボタン・番号は **accent 地 ＋ `--on-accent` の文字**（このテーマでは `#0A140E`）。
- `--ink-sub` は罫線・区切りなど**非テキスト専用**。本文・キャプションには使わない。
- 比較表の見出しは **ink 地＋白文字**。

## 禁止表現（誇張・断定保証）
`必ず / 絶対 / 確実 / 裏技 / 神 / ヤバい / 衝撃 / 100%稼げる` は使わない。効果は中立に（「〜も目指せる」）。

## 1行で使う
```
このフォルダの make-slides スキルで、デザインは design-systems/29-terminal-green.DESIGN.md を使ってスライドを作って。テーマは「◯◯」。
```
