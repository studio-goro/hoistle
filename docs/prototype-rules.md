# プロトタイプ作成ルール

## デザイン方針

UIは一から独自に作らず、**デジタル庁が公開しているデザインシステム**を活用する。

- リポジトリ: `design-system/design-system-example-components-html-main/`
- HTMLスニペットとCSSをそのまま流用する
- 独自スタイルは最小限にとどめる（レイアウト調整のみ）

### CSSの読み込みパス（prototype/配下から参照する場合）

```html
<link rel="stylesheet" href="../design-system/design-system-example-components-html-main/src/global.css">
<link rel="stylesheet" href="../design-system/design-system-example-components-html-main/src/components/{コンポーネント名}/{コンポーネント名}.css">
```

---

## フォルダー構成

```
00-4_whistle/
├── CLAUDE.md               # Claude Code向け指示（目次）
├── docs/                   # 詳細ルール
│   └── prototype-rules.md
├── prototype/              # HTMLプロトタイプ（成果物）
│   ├── 01_login.html
│   └── 02_dashboard.html
└── design-system/          # デジタル庁デザインシステム（変更しない）
    └── design-system-example-components-html-main/
```

---

## 命名規則

### ファイル名

```
{2桁番号}_{画面名}.html
```

| ファイル名 | 意味 |
|---|---|
| `01_login.html` | 1番目の画面：ログイン |
| `02_dashboard.html` | 2番目の画面：ダッシュボード |
| `03_user-list.html` | 3番目の画面：ユーザー一覧 |

- 番号は画面の遷移順に振る
- 画面名は英語・ハイフン区切り・小文字

### 画面タイトル（`<title>`タグ）

日本語で記載する。例: `<title>ログイン</title>`

---

## 利用可能なコンポーネント一覧

デザインシステムに含まれる主なコンポーネント:

`accordion` / `button` / `card` / `checkbox` / `date-picker` /
`form-control-label` / `heading` / `input-text` / `link` / `list` /
`notification-banner` / `radio` / `search-box` / `select` /
`table` / `textarea` など（全35種類）

コンポーネントのHTML例は以下を参照:
`design-system/design-system-example-components-html-main/src/components/{コンポーネント名}/playground.html`
