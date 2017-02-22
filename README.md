# check-if

### One library to check all the things.
* No dependencies
* Browser- and server-side support
* Supports all ES5 and above environments (IE8 and below with [es5-shim](https://github.com/es-shims/es5-shim))

### Install:

```
npm i check-if --save
```

or

```
yarn add check-if
```

### Usage:

Modern build systems:

```javascript
// bring in the whole library
import is from "check-if";

// or if you just want a specific module (keeps bundles tiny)
import isArray from 'check-if/array';

// or a specific module's interface method
import {
  isNotBoolean
} from 'check-if/boolean';
```

CommonJS build systems:

```javascript
const is = require('check-if').default;
```

Standalone script tag:

```javascript
var is = window.checkIf;
```

### API

Check out the [API page](API.md) to see all the available type checks.

### Development

Standard stuff, clone the repo and `npm install` dependencies. The npm scripts available:
* `build` => run webpack to build development `dist` file with NODE_ENV=development
* `build:minifed` => run webpack to build production `dist` file with NODE_ENV=production
* `dev` => run webpack dev server to run example app (playground!)
* `dev:dashboard` => same as `dev` but with webpack-dashboard
* `dev:dashboard:minimal` => same as `dev` but with webpack-dashboard run in minimal mode
* `dist` => runs `build` and `build-minified`
* `docs` => builds the docs via `jsdoc`
* `lint` => run ESLint against all files in the `src` folder
* `prepublish` => runs `compile-for-publish`
* `prepublish:compile` => run `lint`, `test`, `transpile`, `dist`
* `test` => run AVA test functions with `NODE_ENV=test`
* `test:coverage` => run `test` but with `nyc` for coverage checker
* `test:watch` => run `test`, but with persistent watcher
* `transpile` => run babel against all files in `src` to create files used in npm package
