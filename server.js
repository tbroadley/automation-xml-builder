var connect = require('connect');
var serveStatic = require('serve-static');

var browserify = require("browserify");
var watchify = require("watchify");
var fs = require("fs");

// The port on which the app will listen.
const PORT = 8080;

// Set up the watchify build.
var b = browserify({ cache: {}, packageCache: {} });
var w = watchify(b);

// Check if the build should be done in development mode.
// The development build includes redux-devtools.
var devMode = process.argv.indexOf('dev') !== -1;

if (devMode) {
  w.add('index.dev.js');
  console.log('Building in development mode.')
  console.log('The development build includes redux-devtools.')
} else {
  w.add('index.js');
}


w.on('update', function() {
  w.bundle()
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(fs.createWriteStream('build/bundle.js'));
});

w.on('log', function(msg) {
  console.log(msg);
});

// Watchify will not emit 'update' events until you've called
// w.bundle() once and completely drained the stream it returns.
// An 'update' event is emitted to achieve this.
w.emit('update');

// Start the web server, serving static files from the current directory.
connect().use(serveStatic(".")).listen(PORT);

console.log("Listening on port " + PORT);
