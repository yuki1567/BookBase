# 命名規約

## データベースオブジェクト

### 全般

<details><summary>大文字は使用しない</summary>

- **例**
  - `DOCUMENTS` ❌
  - `Documents` ❌
  - `documents` ✔️

</details>

<details><summary>複数単語はスネークケースを使用する</summary>

- **例**
  - `tableName` ❌
  - `TableName` ❌
  - `tablename` ❌
  - `table_name` ✔️

</details>

<details><summary>略名は使用しない</summary>

- **例**
  - `start_dt` ❌
  - `maker_cd` ❌
  - `start_date` ✔️
  - `maker_code` ✔️

</details>

---

### テーブル

<details><summary>複数形を使用する</summary>

- **例**
  - `document` ❌
  - `documents` ✔️
  - `category` ❌
  - `categorys` ❌
  - `categories` ✔️

</details>

<details><summary>N:N のテーブルは「複数形 + _ + 複数形」を使用する</summary>

- **例**
  - `userscategories` ❌
  - `user_categories` ❌
  - `users_categories` ✔️

</details>

---

### カラム

以下のカラムは必須

- `id`: 主キー
- `created_at`: 登録日時
- `updated_at`: 更新日時

<details><summary>他テーブルの主キーとジョインするカラムは「テーブル名(単数系)_id」を使用する</summary>

- **例**
  - `categories_id` ❌
  - `category_id` ✔️

</details>

<details><summary>flg / kbn などの略名は利用しない</summary>

- **例**
  - `delete_flg` ❌
  - `delete_flag` △
  - `is_deleted` ✔️

</details>

<details><summary>時間を表すカラムは「受動態_on」または「受動態_at」を使用する</summary>

- **DATE 型**: 「受動態\_on」
- **TIMESTAMP 型**: 「受動態\_at」
- **例**
  - `created` ❌
  - `created_at` ✔️
  - `closed_day` ❌
  - `closed_on` ✔️

</details>

---

### インデックス

<details><summary>インデックスは `idx_<テーブル名>_<NN>` を使用</summary>

- **例**: `users` テーブルの場合
  - `idx_users_01`

</details>

## マイグレーションファイル

命名フォーマット：<タイムスタンプ>-<アクション>\_<対象>

例）npm run migration:generate User CreateTable

---

### アクション一覧

- **CreateTable**  
  テーブルの作成  
  例: `CreateTable_Users`

- **Add**  
  カラムやインデックスの追加  
  例: `Add_EmailToUsers`

- **Remove / Drop**  
  カラムやインデックスの削除  
  例: `Drop_EmailFromUsers`

- **Rename**  
  カラムやテーブル名の変更  
  例: `Rename_UsersToCustomers`

- **Alter**  
  カラムのデータ型変更、制約の変更  
  例: `Alter_EmailInUsers`

- **Insert**  
  データの挿入（特定の初期データなど）  
  例: `Insert_InitialRoles`

- **Delete**  
  データの削除  
  例: `Delete_ObsoleteDataFromUsers`

- **Update**  
  データの更新  
  例: `Update_StatusInOrders`

- **CreateIndex**  
  インデックスの作成  
  例: `CreateIndex_Users_Email`

- **DropIndex**  
  インデックスの削除  
  例: `DropIndex_Users_Email`

---

### 対象一覧

- **Table 名**  
  操作対象となるテーブル名  
  例: `UsersTable`, `OrdersTable`

- **Column 名**  
  操作対象となるカラム名  
  例: `Email`, `Status`

- **Index 名**  
  操作対象となるインデックス名  
  例: `EmailIndex`, `UniqueKey`

---

### 使用例

1. **新規テーブルの作成**  
   `20241222-CreateTable_Users`

2. **カラムの追加**  
   `20241222-Add_EmailToUsers`

3. **インデックスの削除**  
   `20241222-DropIndex_Users_Email`

4. **データの挿入**  
   `20241222-Insert_InitialRoles`

## ディレクトリ構成案

.
├── docker/
│ ├── DB/
│ │ └── my.cnf
│ └── web-app/
│ ├── default.conf
│ ├── Dockerfile
│ └── start-application.sh
└── src/
├── front/
│ ├── .nuxt
│ ├── components (Atomic Design に基づく Vue コンポーネント)
│ ├── layouts (共通レイアウト)
│ ├── pages (ルーティングページ)
│ ├── plugings (axios などのプラグイン)
│ ├── services (ビジネスロジック)
│ ├── types (型定義ファイル)
│ ├── utils (ユーティリティ)
│ └── nuxt.config.ts (Nuxt 設定ファイル)
├── node_modules
├── server/
│ ├── app/ (アプリケーションの実コード)
│ │ ├── domain (ドメイン層 詳細なビジネスロジック)
│ │ ├── infrastructure/ (インフラ層 外部の DB などとやり取りする)
│ │ │ ├── entities (TypeORM のエンティティを定義)
│ │ │ └── repositories (TypeORM のリポジトリ実装)
│ │ ├── application/ (アプリケーション層 ビジネスロジックの流れを記載)
│ │ │ └── useCases
│ │ └── interfaces/ (プレゼンテーション層 )
│ │ ├── controllers ()
│ │ └── routers (エンドポイントで受け取った処理をコントローラーにルーティングする)
│ ├── migrations
│ ├── seeds
│ ├── scripts
│ └── tests
├── shared/
│ ├── types
│ └── constans
├── .eslintrc.js
├── .prettierrc
├── ecosystem.config.js
├── package.json
└── tsconfig.json

# API 設計

## 基本形

```
{
  "method": "POST",
  "url": "https://example.com/api/books",
    "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  "body": {
    "filters": {
      "select": ["title", "descrption"],
      "where": {
        "category":
      }
    },
    "pagination": {
      "offset": 1,
      "limit": 10
    },
    "sort": [
      {
        "field": "title",
        "order": "desc"
      },
      {
        "field": "description",
        "order": "desc"
      },
    ]
  }
}
```
