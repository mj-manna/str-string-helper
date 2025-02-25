export class Str {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  static random(length: number = 16): Str {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return new Str(result);
  }

  static from(value: string): Str {
    return new Str(value);
  }

  lowercase(): this {
    this.value = this.value.toLowerCase();
    return this;
  }

  uppercase(): this {
    this.value = this.value.toUpperCase();
    return this;
  }

  capitalize(): this {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    return this;
  }

  sanitize(): this {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    return this;
  }

  slug(): this {
    this.value = this.value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return this;
  }

  contains(search: string): boolean {
    return this.value.includes(search);
  }

  startsWith(search: string): boolean {
    return this.value.startsWith(search);
  }

  endsWith(search: string): boolean {
    return this.value.endsWith(search);
  }

  replace(search: string | RegExp, replace: string): this {
    this.value = this.value.replace(search, replace);
    return this;
  }

  replaceAll(search: string | RegExp, replace: string): this {
    this.value = this.value.replace(new RegExp(search, 'g'), replace);
    return this;
  }

  limit(limit: number, end: string = '...'): this {
    this.value = this.value.length > limit ? this.value.substring(0, limit) + end : this.value;
    return this;
  }

  trim(): this {
    this.value = this.value.trim();
    return this;
  }

  get(): string {
    return this.value;
  }
}
