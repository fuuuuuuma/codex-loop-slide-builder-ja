# DESIGN.md — アプリコット（Apricot）

> **これは何**：スライドの「配色・フォント・型」をひとまとめにした正典です。`make-slides` の `DESIGN.md` としてコピーするか、
> エージェントに「この DESIGN.md に従ってスライドを作って」と渡すだけで、この見た目で統一されたデッキになります。
> 番号 17 / 50 ／ カテゴリ: 親しみ ／ モード: ライト（明背景）

## 使いどころ
- 子育て・教育・市民向け
- 雰囲気：明るい・親切
- モチーフ：アプリコットの丸バッジ

## カラートークン（意味ベース）
| トークン | 役割 | 値 |
|---|---|---|
| `--brand` | 主色（見出し・強調） | `#C77A33` |
| `--brand-deep` | 主色の濃い版（小見出し・帯） | `#9E5E22` |
| `--accent` | 差し色（番号・枠線・バッジ・矢印） | `#F2B36B` |
| `--accent-deep` | 差し色の濃い版（バッジ影など） | `#D08A3C` |
| `--bg` / `--paper` | 背景 / カード白面 | `#FEF8EF` / `#FFFFFF` |
| `--ink` / `--ink-mid` | 本文 / 補助テキスト | `#6B3F16` / `#936B40` |
| `--ink-sub` | 極淡（**罫線など非テキスト専用**） | `#C7A57E` |
| `--on-accent` | accent 地の上に乗せる文字色 | `#6B3F16` |

## そのまま貼り付け（`:root`）
スライドHTMLの `:root{ ... }` をこのブロックで丸ごと置き換えてください。

```css
:root{
  --brand:#C77A33; --brand-deep:#9E5E22; --brand-soft:rgba(199,122,51,0.08); --brand-line:rgba(199,122,51,0.22);
  --accent:#F2B36B; --accent-deep:#D08A3C; --accent-soft:rgba(242,179,107,0.16);
  --bg:#FEF8EF; --paper:#FFFFFF; --ink:#6B3F16; --ink-mid:#936B40; --ink-sub:#C7A57E;
  --line:rgba(107,63,22,0.12); --on-accent:#6B3F16; --canvas:#F3E8D6;
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
- バッジ・ボタン・番号は **accent 地 ＋ `--on-accent` の文字**（このテーマでは `#6B3F16`）。
- `--ink-sub` は罫線・区切りなど**非テキスト専用**。本文・キャプションには使わない。
- 比較表の見出しは **ink 地＋白文字**。

## 禁止表現（誇張・断定保証）
`必ず / 絶対 / 確実 / 裏技 / 神 / ヤバい / 衝撃 / 100%稼げる` は使わない。効果は中立に（「〜も目指せる」）。

## 1行で使う
```
このフォルダの make-slides スキルで、デザインは design-systems/17-apricot.DESIGN.md を使ってスライドを作って。テーマは「◯◯」。
```
