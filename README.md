# 🏆 Str String Helper

A powerful TypeScript utility library for advanced string manipulation, inspired by Laravel's `Str` helper. This package provides an intuitive API for handling strings with chaining support.

---

## 📦 Installation

Install the package via NPM:
```sh
npm install str-string-helper
```

Or via Yarn:
```sh
yarn add str-string-helper
```

---

## 🚀 Getting Started

### 📌 Import the Library
```typescript
import { Str } from 'str-string-helper';
```

### 🔥 Quick Examples
#### ✅ Generate a Random String
```typescript
const randomStr = Str.random(12).get();
console.log(randomStr); // Example: 'A1b2C3d4E5F6'
```

#### ✅ Manipulating Strings
```typescript
const result = Str.from('Hello World!').lowercase().sanitize().get();
console.log(result); // "helloworld"
```

---

## 🎯 Features & Examples

### 🔢 Generate Random Strings
```typescript
console.log(Str.random(16).get());
// Output: Random alphanumeric string of length 16
```

### 🛠️ String Formatting
#### Convert Case
```typescript
console.log(Str.from('hello world').capitalize().get());
// Output: 'Hello world'
```

#### Convert to StudlyCase
```typescript
console.log(Str.from('foo_bar').studly().get());
// Output: 'FooBar'
```

#### Convert to Snake Case
```typescript
console.log(Str.from('fooBar').snake().get());
// Output: 'foo_bar'
```

#### Convert to Base64
```typescript
console.log(Str.from('Doracone').toBase64().get());
// Output: 'TGFydfYXZlbA=='
```

### 📝 String Modification
#### Replace Substring
```typescript
console.log(Str.from('The Framework').substrReplace(' Doracone', 3, 0).get());
// Output: 'The Doracone Framework'
```

#### Remove HTML Tags
```typescript
console.log(Str.from('<a href="https://doracone.com"><b>Manna</b></a>').stripTags().get());
// Output: 'Manna'
```

### 🔍 String Validation & Checking
#### Starts With
```typescript
console.log(Str.from('This is my name').startsWith('This'));
// Output: true
```

#### Ends With
```typescript
console.log(Str.from('disney world').whenEndsWith('world', (str) => str.capitalize()).get());
// Output: 'Disney World'
```

### 🔀 String Transformations
#### Split String
```typescript
console.log(Str.from('one, two, three').split(/[,\s]+/).get());
// Output: ['one', 'two', 'three']
```

#### Wrap String
```typescript
console.log(Str.from('Doracone').wrap('"').get());
// Output: '"Doracone"'
```

### 🤖 Conditional String Operations
#### Apply Changes If Condition is Met
```typescript
console.log(Str.from('doracone').whenExactly('doracone', (str) => str.capitalize()).get());
// Output: 'Doracone'
```

```typescript
console.log(Str.from('framework').whenNotExactly('doracone', (str) => str.capitalize()).get());
// Output: 'Framework'
```

### 🎭 Special Operations
#### Trim Extra Spaces
```typescript
console.log(Str.from('    Doracone    framework    ').squish().get());
// Output: 'Doracone framework'
```

#### Append a Prefix
```typescript
console.log(Str.from('this/string').start('/').get());
// Output: '/this/string'
```

---

## 🔍 Complete API Reference
### 🏗️ String Creation
- `Str.random(length: number): Str` → Generate a random alphanumeric string.
- `Str.from(value: string): Str` → Create a wrapper instance for chaining operations.

### 🏷️ Case Conversion
- `.lowercase(): this` → Convert to lowercase.
- `.uppercase(): this` → Convert to uppercase.
- `.capitalize(): this` → Capitalize the first letter.
- `.studly(): this` → Convert to StudlyCase.
- `.snake(): this` → Convert to snake_case.

### 🔧 String Manipulation
- `.replace(search: string | RegExp, replace: string): this` → Replace substring.
- `.replaceAll(search: string | RegExp, replace: string): this` → Replace all occurrences.
- `.substr(start: number, length?: number): this` → Extract substring.
- `.substrReplace(replace: string, start: number, length?: number): this` → Replace substring.
- `.squish(): this` → Trim extra spaces.
- `.wrap(before?: string, after?: string): this` → Wrap the string.

### 🔍 String Checking
- `.contains(search: string): boolean` → Check if the string contains a substring.
- `.startsWith(search: string): boolean` → Check if it starts with a given string.
- `.endsWith(search: string): boolean` → Check if it ends with a given string.

### 🔀 Transformations
- `.split(pattern: RegExp): string[]` → Split string by pattern.
- `.stripTags(allowedTags?: string): this` → Remove HTML tags.
- `.toBase64(): this` → Convert to Base64.

### 🤖 Conditional Modifiers
- `.when(condition: boolean, callback: (str: Str) => Str): this` → Apply transformation if condition is met.
- `.whenExactly(match: string, callback: (str: Str) => Str): this` → Apply transformation if string exactly matches.
- `.whenNotExactly(match: string, callback: (str: Str) => Str): this` → Apply transformation if string does not match.
- `.whenStartsWith(match: string, callback: (str: Str) => Str): this` → Apply transformation if starts with.
- `.whenEndsWith(match: string, callback: (str: Str) => Str): this` → Apply transformation if ends with.

### 📤 Output
- `.get(): string` → Retrieve the final string value.

---

## 🛠️ Running Tests
Run unit tests with Jest:
```sh
npm test
```

---

## 📜 License
Released under the MIT License.

🚀 **Happy Coding!**
