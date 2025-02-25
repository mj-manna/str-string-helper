// src/StringWrapper.ts
export class StringWrapper {
    private value: string;
  
    constructor(value: string) {
      this.value = value;
    }
  
    static from(value: string): StringWrapper {
      return new StringWrapper(value);
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
      this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
      return this;
    }
  
    reverse(): this {
      this.value = this.value.split('').reverse().join('');
      return this;
    }
  
    sanitize(): this {
      this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
      return this;
    }
  
    truncate(length: number): this {
      this.value = this.value.length > length ? this.value.substring(0, length) + '...' : this.value;
      return this;
    }
  
    mask(char: string = '*', visible: number = 3): this {
      this.value = char.repeat(this.value.length - visible) + this.value.slice(-visible);
      return this;
    }
  
    toNumber(): number | null {
      const num = Number(this.value);
      return isNaN(num) ? null : num;
    }
  
    get(): string {
      return this.value;
    }
  }

  