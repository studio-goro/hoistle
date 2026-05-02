# prototype.css 運用ルール

`prototype/prototype.css` は、全プロトタイプページ共通のレイアウト・コンポーネントスタイルを集約したファイル。

---

## 読み込み方

デザインシステムの CSS より後、ページ固有の `<style>` より前に読み込む。

```html
<!-- 1. デザインシステム -->
<link rel="stylesheet" href="../design-system/design-system-example-components-html-main/src/global.css">
<link rel="stylesheet" href="../design-system/design-system-example-components-html-main/src/components/button/button.css">

<!-- 2. 共通スタイル -->
<link rel="stylesheet" href="prototype.css">

<!-- 3. ページ固有スタイル（必要なものだけ） -->
<style>
  /* このページだけの上書き・追加 */
</style>
```

---

## prototype.css に含まれるもの

| クラス／要素 | 内容 |
|---|---|
| `html` | 背景色 `#d0d0d0`（ブラウザ余白）|
| `body` | max-width 390px、背景・フォント・shadow |
| `.nav-bar` / `.nav-back` / `.nav-title` / `.nav-spacer` | flex型ナビバー（戻る・タイトル・スペーサー） |
| `.icon-btn.dads-button` / `.brand` / `.brand-mark` / `.brand-name` | grid型ナビバー用ブランドロゴコンポーネント |
| `.main` | `padding: 24px 16px; gap: 24px`（デフォルト） |
| `.section-block` / `.section-heading` | セクション見出し |
| `.fixed-footer` | 固定フッター |
| `.bottom-sheet` / `.sheet-*` | ハーフモーダル（ボトムシート）|
| `.compare-link` | プロトタイプ比較用の控えめな導線 |
| `.ic` | SVGアイコン共通ヘルパー |

---

## ページ固有スタイルに書くもの

prototype.css のデフォルトと**異なる**値だけページの `<style>` に書く。

```css
/* 例: 支払い系ページ（07・08） */
body {
  padding-bottom: 88px; /* 固定フッター分のオフセット */
  color: var(--color-neutral-solid-gray-800, #1a1a1a);
}

/* 例: 完了系ページ（09）— mainのpadding・gapが異なる */
.main {
  padding: 40px 16px 48px;
  align-items: center;
  gap: 32px;
}
```

---

## ページグループ別の上書きパターン

### 認証系ページ（03・05・06）

html背景とbodyカラー・shadowがデフォルトと異なる。nav-barはgridレイアウト。

```css
html { background: var(--color-neutral-solid-gray-100); }
body { color: var(--color-neutral-solid-gray-800); box-shadow: 0 0 16px rgba(0,0,0,0.12); }
.nav-bar { display: grid; grid-template-columns: 40px 1fr 40px; }
```

### 暗背景ページ（13）

```css
html, body { background: var(--color-neutral-solid-gray-900); }
```

### イベント一覧ページ（01・01_list）

body に max-width を持たせず、`.page-wrapper` パターンで幅制御する。

```css
body { margin: 0; max-width: none; box-shadow: none; }
```

---

## 色トークン早見表

モノトーン系は必ず Solid Gray トークンを使う。独自グレーは禁止。

| トークン | 用途例 |
|---|---|
| `--color-neutral-solid-gray-50` | body背景 |
| `--color-neutral-solid-gray-100` | 認証系ページ背景 |
| `--color-neutral-solid-gray-200` | ボーダー・仕切り線 |
| `--color-neutral-solid-gray-420` | カード枠線（やや濃い） |
| `--color-neutral-solid-gray-600` | 補足テキスト |
| `--color-neutral-solid-gray-800` | 本文・見出し |
| `--color-neutral-solid-gray-900` | 最強調テキスト |
| `--color-primitive-blue-50` | 成功アイコン円背景 |
| `--color-primitive-blue-900` | 成功アイコン色 |
| `--color-primitive-blue-1000` | アプリブランドカラー |
