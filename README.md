# 🧑‍🍳 絵文字ミックス | Emoji Mix

## 日本語

### 絵文字ミックス ゲームについて

[絵文字ミックス](https://emojimix.online) は、2つの絵文字を組み合わせて新しい絵文字を作れる革新的なWebアプリケーションです。

当サービスでは、10万種類以上の組み合わせパターンから、オリジナルの絵文字を作成することができます。シンプルな操作で、チャットやSNSを楽しく演出できる絵文字ゲームをお楽しみください。

### 特徴
- 🎮 直感的な操作の絵文字ミックスゲーム
- 🎨 10万種類以上の組み合わせパターン
- 💫 革新的な絵文字生成技術
- 📱 スマートフォン対応
- 🆓 完全無料

### 開発環境の構築

[VSCode devcontainer](https://code.visualstudio.com/docs/remote/containers) を利用して、必要な開発環境を整えています。

#### アプリケーションの起動

以下のコマンドで、必要なメタデータをダウンロードし、プロジェクトを開始できます：

```bash
curl -L --compressed https://raw.githubusercontent.com/xsalazar/emoji-kitchen-backend/main/app/metadata.json -o src/Components/metadata.json
npm install && npm start
```

ローカル環境で [http://localhost:5173/](http://localhost:5173/) にアクセスすると、アプリケーションが起動します。

### デプロイメント

- GitHub Actionsによる自動デプロイ: [./.github/workflows/deploy.yml](./.github/workflows/deploy.yml)
- Dependabotによる依存関係の自動更新: [./.github/workflows/automerge-dependabot.yml](./.github/workflows/automerge-dependabot.yml)

[デモサイトを見る](https://emojimix.online)

---

## English

### About Emoji Mix

[Emoji Mix](https://emojimix.online) is an innovative web application that allows users to create new emojis by combining two existing ones.

Our service offers over 100,000 possible combinations, enabling users to create unique emojis that can make chats and social media interactions more engaging and fun.

### Features
- 🎮 Intuitive emoji mixing interface
- 🎨 Over 100,000 possible combinations
- 💫 Innovative emoji generation technology
- 📱 Mobile-friendly design
- 🆓 Completely free to use

### Development Setup

This project uses [VSCode's devcontainer](https://code.visualstudio.com/docs/remote/containers) feature to ensure consistent development environments.

#### Application Startup

Download the required metadata and start the project with these commands:

```bash
curl -L --compressed https://raw.githubusercontent.com/xsalazar/emoji-kitchen-backend/main/app/metadata.json -o src/Components/metadata.json
npm install && npm start
```

Access the application locally at [http://localhost:5173/](http://localhost:5173/).

### Deployments

- Automated deployments via GitHub Actions: [./.github/workflows/deploy.yml](./.github/workflows/deploy.yml)
- Automated dependency updates via Dependabot: [./.github/workflows/automerge-dependabot.yml](./.github/workflows/automerge-dependabot.yml)

[View Demo](https://emojimix.online)
