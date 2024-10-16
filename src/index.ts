import NodeCache from 'node-cache';

declare global {
  var _cache: NodeCache;
}

class MemoryCache {
  constructor() {
    if (!global._cache) {
      global._cache = new NodeCache();
    }
  }

  // Set a value with a key and a time to live (ttl) in seconds
  set<T>(key: string, value: T, ttl = 60): boolean {
    return global._cache.set(key, value, ttl) ?? false;
  }

  // Get a value by key
  get<T>(key: string): T | undefined {
    return global._cache.get(key) as T;
  }

  // Delete a value by key
  del(key: string): void {
    global._cache.del(key);
  }

  // Clear all keys and values
  flush(): void {
    global._cache.flushAll();
  }

  // Get all keys
  keys(): string[] {
    return global._cache.keys() ?? [];
  }

  // Get ttl of a key
  getTtl(key: string): number | undefined {
    return global._cache.getTtl(key);
  }

  // Set ttl of a key
  setTtl(key: string, ttl: number): void {
    global._cache.ttl(key, ttl);
  }
}

export default new MemoryCache();
