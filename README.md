# String Utils

A powerful TypeScript utility library for advanced string manipulation.

## 📦 Installation

```sh
npm install str-string-helper
```

## 🚀 Usage

### Import the Library

```typescript
import { Str } from 'str-string-helper';
```

### Generate a Random String

```typescript
const randomStr = Str.random(12).get();
console.log(randomStr); // Example: 'A1b2C3d4E5F6'
```

### Create a String Wrapper Instance

```typescript
const str = Str.from("Hello World!").lowercase().sanitize().get();
console.log(str); // "helloworld"
```

### Available Methods

#### `Str`
- `random(length: number): Str` → Generate a random alphanumeric string.
- `from(value: string): Str` → Create a wrapper instance for chaining operations.
- `.lowercase(): this` → Convert string to lowercase.
- `.uppercase(): this` → Convert string to uppercase.
- `.capitalize(): this` → Capitalize the first letter.
- `.reverse(): this` → Reverse the string.
- `.sanitize(): this` → Remove non-alphanumeric characters.
- `.truncate(length: number): this` → Shorten string with `...` suffix.
- `.mask(char: string, visible: number): this` → Mask all but the last `visible` characters.
- `.toNumber(): number | null` → Convert string to number if possible.
- `.contains(search: string): boolean` → Check if the string contains the given substring.
- `.startsWith(search: string): boolean` → Check if the string starts with the given substring.
- `.endsWith(search: string): boolean` → Check if the string ends with the given substring.
- `.replace(search: string | RegExp, replace: string): this` → Replace occurrences of a substring.
- `.replaceAll(search: string | RegExp, replace: string): this` → Replace all occurrences of a substring.
- `.limit(limit: number, end: string = '...'): this` → Limit string length with a suffix.
- `.trim(): this` → Trim whitespace from both ends of the string.
- `.padBoth(length: number, pad: string = ' '): this` → Pad both sides of the string.
- `.padLeft(length: number, pad: string = ' '): this` → Pad the left side of the string.
- `.padRight(length: number, pad: string = ' '): this` → Pad the right side of the string.
- `.slug(): this` → Convert the string to a URL-friendly slug.
- `.squish(): this` → Remove extra whitespace from the string.
- `.get(): string` → Retrieve the final string value.

## 🧪 Testing

Run unit tests with Jest:

```sh
npm test
```

## 📜 License

MIT License