# hoistle

## クライアント・体制
→ overview.md の「PJ体制」を参照（GORO・クライアント双方の役割と関与方法）
→ 担当者詳細は people/hoistle/org.md を参照

## フォルダ構成

```
hoistle/
├── CLAUDE.md
├── overview.md
├── meeting/           ← 議事録（YYYY-MM-DD.md）
├── docs/              ← 設計資料（CJM・画面要件など、人間が読むもの）
├── material/          ← 素材（icon / screen / user-icon）
├── design-system/     ← 実装依存ツール（デジタル庁デザインシステム）
├── prototype/         ← 作業用プロトタイプ（番号付きHTML）
├── prototype-share/   ← チーム共有用プロトタイプ（日本語名HTML）
└── .claude/skills/    ← プロジェクト固有スキル（Claude への実装指示）
```

## 成果物・配置ルール
- 議事録：meeting/YYYY-MM-DD.md
- 作業用プロトタイプ：prototype/{2桁番号}_{画面名}.html
- 共有用プロトタイプ：prototype-share/{状態名}.html

## スキル（Claude への実装指示）
→ [.claude/skills/prototype-rules.md](.claude/skills/prototype-rules.md)
→ [.claude/skills/prototype-css.md](.claude/skills/prototype-css.md)

## 設計資料（人間が読む）
→ [docs/customer-journey-map.md](docs/customer-journey-map.md)
→ [docs/screen-requirements.md](docs/screen-requirements.md)

## 作業時の注意
- UIはデジタル庁デザインシステムを使う（design-system/ のHTMLスニペット・CSSを流用）
- 共通CSSは prototype/prototype.css に集約されている。重複して書かない
- 画面作成前に docs/customer-journey-map.md でユーザー文脈を確認する
