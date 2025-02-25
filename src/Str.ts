import { StringWrapper } from "./StringWrapper";

export class Str {
    static random(length: number = 10): string {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }
  
    static from(value: string): StringWrapper {
      return StringWrapper.from(value);
    }
  }