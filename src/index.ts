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

  /**
   * Stores a value in the cache with a specified time-to-live (TTL).
   */
  set<T>(key: string, value: T, ttl = 60): void {
    global._cache.set(key, value, ttl);
  }

  /**
   * Retrieves a value from the cache. If the key does not exist, returns undefined.
   */
  get<T>(key: string): T | undefined {
    return global._cache.get(key) as T;
  }


  /**
   * Deletes a key from the cache.
   */
  del(key: string): void {
    global._cache.del(key);
  }

  /**
   * Deletes all keys from the cache.
   */
  flush(): void {
    global._cache.flushAll();
  }

  /**
   * Returns an array of all keys in the cache.
   */
  keys(): string[] {
    return global._cache.keys() ?? [];
  }

  /**
   * Returns the time-to-live (TTL) of a key in the cache.
   */
  getTtl(key: string): number | undefined {
    return global._cache.getTtl(key);
  }

  /**
   * Sets the time-to-live (TTL) of a key in the cache.
   */
  setTtl(key: string, ttl: number): void {
    global._cache.ttl(key, ttl);
  }
}

export default new MemoryCache();
