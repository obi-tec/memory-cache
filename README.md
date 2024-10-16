# Memory Cache

Memory Cache is a TypeScript library for in-memory caching. It provides a simple and efficient way to store and retrieve data in memory, improving the performance of your applications.

## Features

- Lightweight and fast
- Simple API
- Supports TTL (Time to Live) for cache entries
- Written in TypeScript for type safety

## Installation

To install the library, use npm or yarn:

```bash
npm install @obi-tec/memory-cache
```

## Usage

Here's a basic example of how to use Memory Cache TS:

```typescript
import MemoryCache from '@obi-tec/memory-cache';

// Set a value in the cache
MemoryCache.set<number>('key', 123, 60); // The value will expire in 60 seconds

// Get a value from the cache
const value = MemoryCache.get('key');
console.log(value); // Output: 123

// Delete a value from the cache
cache.delete('key');
```

## API

### `set<T>(key: string, value: T, ttl?: number): void`

Stores a value in the cache with an optional TTL (Time to Live).

- `key`: The key to store the value under.
- `value`: The value to store.
- `ttl`: Optional. The time in seconds before the value expires. Default value is 60 seconds.

### `get<T>(key: string): T | undefined`

Retrieves a value from the cache.

- `key`: The key of the value to retrieve.
- Returns: The value associated with the key, or `undefined` if the key does not exist in the cache.


### `del(key: string): void`

Deletes a value from the cache.

- `key`: The key of the value to delete.

### `flush(): void`

Flushes the entire cache, removing all entries.

### `keys(): string[]`

Returns an array of all keys currently stored in the cache.

### `getTtl(key: string): number | undefined`

Retrieves the remaining TTL (Time to Live) for a given key.

- `key`: The key of the value to check the TTL for.
- Returns: The remaining TTL in seconds, or `undefined` if the key does not exist or has no TTL set.

### `setTtl(key: string, ttl: number): void`

Updates the TTL (Time to Live) for an existing cache entry.

- `key`: The key of the value to update the TTL for.
- `ttl`: The new TTL in seconds.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.