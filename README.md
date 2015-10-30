# Automation XML Builder
1. Get a local copy of the repository.
2. `npm install`

## npm scripts
- `start` - build in production mode (with `envify` and `uglify-js`) and start `server.js`
- `start-dev` - build in dev mode (in watch mode, with `redux-devtools`, and `React.addons.Perf` available in `window`) and start `server.js`.

You can also just run `grunt prod` (which will only build in production mode) or `grunt dev`.
