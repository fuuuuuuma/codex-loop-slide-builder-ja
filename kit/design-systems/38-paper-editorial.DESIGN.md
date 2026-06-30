# DESIGN.md — ペーパー・エディトリアル（Paper Editorial）

> **これは何**：スライドの「配色・フォント・型」をひとまとめにした正典です。`make-slides` の `DESIGN.md` としてコピーするか、
> エージェントに「この DESIGN.md に従ってスライドを作って」と渡すだけで、この見た目で統一されたデッキになります。
> 番号 38 / 50 ／ カテゴリ: ミニマル ／ モード: ライト（明背景）

## 使いどころ
- 読み物・特集・長文
- 雰囲気：雑誌的・知的
- モチーフ：明朝＋赤の見出し

## カラートークン（意味ベース）
| トークン | 役割 | 値 |
|---|---|---|
| `--brand` | 主色（見出し・強調） | `#7A2E2E` |
| `--brand-deep` | 主色の濃い版（小見出し・帯） | `#5C2020` |
| `--accent` | 差し色（番号・枠線・バッジ・矢印） | `#C2554F` |
| `--accent-deep` | 差し色の濃い版（バッジ影など） | `#9A3C38` |
| `--bg` / `--paper` | 背景 / カード白面 | `#FBF8F2` / `#FFFFFF` |
| `--ink` / `--ink-mid` | 本文 / 補助テキスト | `#2A2622` / `#5C544C` |
| `--ink-sub` | 極淡（**罫線など非テキスト専用**） | `#A39A8B` |
| `--on-accent` | accent 地の上に乗せる文字色 | `#FBF8F2` |

## そのまま貼り付け（`:root`）
スライドHTMLの `:root{ ... }` をこのブロックで丸ごと置き換えてください。

```css
:root{
  --brand:#7A2E2E; --brand-deep:#5C2020; --brand-soft:rgba(122,46,46,0.08); --brand-line:rgba(122,46,46,0.22);
  --accent:#C2554F; --accent-deep:#9A3C38; --accent-soft:rgba(194,85,79,0.16);
  --bg:#FBF8F2; --paper:#FFFFFF; --ink:#2A2622; --ink-mid:#5C544C; --ink-sub:#A39A8B;
  --line:rgba(42,38,34,0.12); --on-accent:#FBF8F2; --canvas:#EAE4D8;
  --head:'Shippori Mincho';
}
```

> フォント（見出し）：**Shippori Mincho**。Google Fonts を `<head>` に追加：
> `<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700;900&display=swap" rel="stylesheet">`
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
- バッジ・ボタン・番号は **accent 地 ＋ `--on-accent` の文字**（このテーマでは `#FBF8F2`）。
- `--ink-sub` は罫線・区切りなど**非テキスト専用**。本文・キャプションには使わない。
- 比較表の見出しは **ink 地＋白文字**。

## 禁止表現（誇張・断定保証）
`必ず / 絶対 / 確実 / 裏技 / 神 / ヤバい / 衝撃 / 100%稼げる` は使わない。効果は中立に（「〜も目指せる」）。

## 1行で使う
```
このフォルダの make-slides スキルで、デザインは design-systems/38-paper-editorial.DESIGN.md を使ってスライドを作って。テーマは「◯◯」。
```
