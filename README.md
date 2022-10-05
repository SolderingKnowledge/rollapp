# Rollup Starter

Playground with Rollup JS

```bash
npm init -y # start package.json
yarn -D add rollup # add rollup dev dependency
yarn add rollup-plugin-css-only -D # add css ad dev dependency
yarn add @rollup/plugin-typescript -D # add typescript as dev dependency

```

## Optional CMDs
```ts
rollup src/main.js -f cjs

rollup src/main.js -o build/bundle.js -f cjs

rollup -c --watch // set in watch mode

```


### Terminologies
-o => output
-f => format
cjs => common JS
-c | --config => config
esm => ecma script module
-w | --watch => watch
-d | --dir => directory