# Memory Cache TS

Memory Cache TS is a TypeScript library for caching data in memory to improve the performance of your applications.

## Installation

To install the library, use npm:

```bash
npm i -S @obi-tec/memory-cache-ts
```

## Usage

Here is a basic example of how to use Memory Cache TS:

```typescript
import MemoryCache from 'memory-cache-ts';

const cache = new MemoryCache();

// Set a value in the cache
cache.set('key', 'value', 3600); // expires in 1 hour

// Get a value from the cache
const value = cache.get('key');
console.log(value); // outputs: 'value'

// Remove a value from the cache
cache.remove('key');
```

## Features

- Simple API for setting, getting, and removing cache entries
- Supports expiration times for cache entries
- Written in TypeScript for type safety

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.