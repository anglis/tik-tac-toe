class LocalStorage {
  prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  private formatKey(key: string) {
    return `${this.prefix}_${key}`;
  }

  set(key: string, value: string) {
    localStorage.setItem(this.formatKey(key), value);
  }

  get(key: string): string | null {
    return localStorage.getItem(this.formatKey(key));
  }
}

export default LocalStorage;
