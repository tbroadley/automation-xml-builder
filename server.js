var connect = require('connect');
var serveStatic = require('serve-static');

var browserify = require("browserify");
var watchify = require("watchify");
var fs = require("fs");

const PORT = 8080;

var b = browserify({ cache: {}, packageCache: {} });
var w = watchify(b);

w.add('index.js');

w.on('update', function() {
  w.bundle().pipe(fs.createWriteStream('build/bundle.js'));
});

w.on('log', function(msg) {
  console.log(msg);
});

// Watchify will not emit 'update' events until you've called
// w.bundle() once and completely drained the stream it returns.
// An 'update' event is emitted to achieve this.
w.emit('update');

connect().use(serveStatic(".")).listen(PORT);

console.log("Listening on port " + PORT);
