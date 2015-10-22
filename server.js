var connect = require('connect');
var serveStatic = require('serve-static');

// The port on which the app will listen.
const PORT = 8080;

// Start the web server, serving static files from the current directory.
connect().use(serveStatic('.')).listen(PORT);

console.log('Listening on port ' + PORT);
