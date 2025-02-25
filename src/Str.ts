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

  studly(): this {
    this.value = this.value.replace(/[_-]+/g, ' ').replace(/\s(.)/g, (m) => m.toUpperCase()).replace(/\s/g, '').replace(/^(.)/, (m) => m.toUpperCase());
    return this;
  }

  snake(): this {
    this.value = this.value.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    return this;
  }

  wrap(before: string = '', after: string = ''): this {
    this.value = `${before}${this.value}${after}`;
    return this;
  }

  toBase64(): this {
    this.value = Buffer.from(this.value).toString('base64');
    return this;
  }

  substr(start: number, length?: number): this {
    this.value = this.value.substring(start, length ? start + length : undefined);
    return this;
  }

  substrReplace(replace: string, start: number, length?: number): this {
    this.value = this.value.slice(0, start) + replace + this.value.slice(length ? start + length : undefined);
    return this;
  }

  startsWith(search: string): boolean {
    return this.value.startsWith(search);
  }

  endsWith(search: string): boolean {
    return this.value.endsWith(search);
  }

  contains(search: string): boolean {
    return this.value.includes(search);
  }

  replace(search: string | RegExp, replace: string): this {
    this.value = this.value.replace(search, replace);
    return this;
  }

  replaceAll(search: string | RegExp, replace: string): this {
    this.value = this.value.replace(new RegExp(search, 'g'), replace);
    return this;
  }

  squish(): this {
    this.value = this.value.replace(/\s+/g, ' ').trim();
    return this;
  }

  trim(): this {
    this.value = this.value.trim();
    return this;
  }

  stripTags(allowedTags: string = ''): this {
    this.value = this.value.replace(new RegExp(`<\/?(?!${allowedTags})\w+[^>]*>`, 'g'), '');
    return this;
  }

  start(prefix: string): this {
    if (!this.value.startsWith(prefix)) {
      this.value = prefix + this.value;
    }
    return this;
  }

  split(pattern: RegExp): string[] {
    return this.value.split(pattern);
  }

  when(condition: boolean, callback: (str: this) => this): this {
    if (condition) {
      return callback(this);
    }
    return this;
  }

  whenExactly(match: string, callback: (str: this) => this): this {
    return this.when(this.value === match, callback);
  }

  whenNotExactly(match: string, callback: (str: this) => this): this {
    return this.when(this.value !== match, callback);
  }

  whenStartsWith(match: string, callback: (str: this) => this): this {
    return this.when(this.value.startsWith(match), callback);
  }

  whenEndsWith(match: string, callback: (str: this) => this): this {
    return this.when(this.value.endsWith(match), callback);
  }

  get(): string {
    return this.value;
  }
}
