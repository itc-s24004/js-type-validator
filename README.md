# js-type-validator

## 概要
`js-type-validator`は、JavaScriptおよびTypeScriptで型のバリデーションを行うためのライブラリです。  
オブジェクトの構造やプロパティの型を簡単に定義し、実行時にデータが期待される型に一致するかどうかを検証できます。

## インストール
npm を使用してリポジトリから直接インストールできます。
```bash
npm install itc-s24004/js-type-validator
```

## 導入例
```typescript
import { js_val } from "./dist/index"


type user = {
    name: string;
    age: number;
    job: "engineer" | "teacher" | "artist";
}


const user_validator = js_val<user>().object().notNull()
    .prop("name", p => p.primitive("string").length({ min: 1, max: 32 }))
    .prop("age", p => p.primitive("integer").size({ min: 0, max: 120 }))
    .prop("job", p => p.primitive("string").values( "engineer", "teacher", "artist" ))
;



const user1 = {
    name: "Alice",
    age: 30,
    job: "engineer"
};

const user2 = {
    name: "",
    age: -5,
    job: "doctor"
};

console.log(`Validating user1: ${user_validator.check(user1)}`); // true
console.log(`Validating user2: ${user_validator.check(user2)}`); // false
```

## 今後の予定
- EmailやURLなどの特殊な形式のバリデーションの追加
- 失敗時のエラーメッセージ機能
- カスタムバリデーションルールのサポート
- ドキュメントの充実化