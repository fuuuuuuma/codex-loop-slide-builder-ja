# DESIGN.md — ラベンダー・ソフト（Lavender Soft）

> **これは何**：スライドの「配色・フォント・型」をひとまとめにした正典です。`make-slides` の `DESIGN.md` としてコピーするか、
> エージェントに「この DESIGN.md に従ってスライドを作って」と渡すだけで、この見た目で統一されたデッキになります。
> 番号 41 / 50 ／ カテゴリ: パステル ／ モード: ライト（明背景）

## 使いどころ
- やさしい説明・癒し
- 雰囲気：やわらか・上品
- モチーフ：ラベンダーの淡い円

## カラートークン（意味ベース）
| トークン | 役割 | 値 |
|---|---|---|
| `--brand` | 主色（見出し・強調） | `#7C5CBF` |
| `--brand-deep` | 主色の濃い版（小見出し・帯） | `#5F47A0` |
| `--accent` | 差し色（番号・枠線・バッジ・矢印） | `#B9A3E3` |
| `--accent-deep` | 差し色の濃い版（バッジ影など） | `#8A6FCC` |
| `--bg` / `--paper` | 背景 / カード白面 | `#F8F5FD` / `#FFFFFF` |
| `--ink` / `--ink-mid` | 本文 / 補助テキスト | `#3E2F66` / `#665A85` |
| `--ink-sub` | 極淡（**罫線など非テキスト専用**） | `#A99CC4` |
| `--on-accent` | accent 地の上に乗せる文字色 | `#3E2F66` |

## そのまま貼り付け（`:root`）
スライドHTMLの `:root{ ... }` をこのブロックで丸ごと置き換えてください。

```css
:root{
  --brand:#7C5CBF; --brand-deep:#5F47A0; --brand-soft:rgba(124,92,191,0.08); --brand-line:rgba(124,92,191,0.22);
  --accent:#B9A3E3; --accent-deep:#8A6FCC; --accent-soft:rgba(185,163,227,0.16);
  --bg:#F8F5FD; --paper:#FFFFFF; --ink:#3E2F66; --ink-mid:#665A85; --ink-sub:#A99CC4;
  --line:rgba(62,47,102,0.12); --on-accent:#3E2F66; --canvas:#E6DFF4;
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
- バッジ・ボタン・番号は **accent 地 ＋ `--on-accent` の文字**（このテーマでは `#3E2F66`）。
- `--ink-sub` は罫線・区切りなど**非テキスト専用**。本文・キャプションには使わない。
- 比較表の見出しは **ink 地＋白文字**。

## 禁止表現（誇張・断定保証）
`必ず / 絶対 / 確実 / 裏技 / 神 / ヤバい / 衝撃 / 100%稼げる` は使わない。効果は中立に（「〜も目指せる」）。

## 1行で使う
```
このフォルダの make-slides スキルで、デザインは design-systems/41-lavender-soft.DESIGN.md を使ってスライドを作って。テーマは「◯◯」。
```
