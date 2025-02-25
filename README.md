# String Utils

A powerful TypeScript utility library for advanced string manipulation.

## 📦 Installation

```sh
npm install string-utils-ts
```

## 🚀 Usage

### Import the Library

```typescript
import { StringHelper, StringWrapper } from 'string-utils-ts';
```

### Generate a Random String

```typescript
const randomStr = StringHelper.random(12);
console.log(randomStr); // Example: 'A1b2C3d4E5F6'
```

### Create a StringWrapper Instance

```typescript
const str = StringHelper.from("Hello World!").lowercase().sanitize().get();
console.log(str); // "helloworld"
```

### Available Methods

#### `StringHelper`
- `random(length: number): string` → Generate a random alphanumeric string.
- `from(value: string): StringWrapper` → Create a wrapper instance for chaining operations.

#### `StringWrapper`
- `.lowercase(): this` → Convert string to lowercase.
- `.uppercase(): this` → Convert string to uppercase.
- `.capitalize(): this` → Capitalize the first letter.
- `.reverse(): this` → Reverse the string.
- `.sanitize(): this` → Remove non-alphanumeric characters.
- `.truncate(length: number): this` → Shorten string with `...` suffix.
- `.mask(char: string, visible: number): this` → Mask all but the last `visible` characters.
- `.toNumber(): number | null` → Convert string to number if possible.
- `.get(): string` → Retrieve the final string value.

## 🧪 Testing

Run unit tests with Jest:

```sh
npm test
```

## 📜 License

MIT License
