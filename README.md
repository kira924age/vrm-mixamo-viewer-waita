# VRM Mixamo Viewer waita

VRM Mixamo Viewer は VRM ファイルをブラウザ上で特定のモーションをつけて描画するサービスです。

## 必要な環境

- Node.js 26.5.0
- pnpm 11.17.0

Node.js のバージョンは `.node-version`、pnpm のバージョンは `package.json` の
`packageManager` field で固定しています。

## セットアップ

```bash
git clone https://github.com/kira924age/vrm-mixamo-viewer-waita.git
cd vrm-mixamo-viewer-waita
corepack enable pnpm
pnpm install --frozen-lockfile
```

## 開発サーバー

```bash
pnpm dev
```

## 品質チェック

```bash
pnpm lint
pnpm lint:tsc
```

Biome で自動修正とフォーマットを行う場合は、次のコマンドを使用します。

```bash
pnpm lint:fix
pnpm format
```

## Production build

```bash
pnpm build
pnpm preview
```
