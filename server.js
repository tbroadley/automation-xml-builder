var connect = require('connect');
var serveStatic = require('serve-static');

const PORT = 8080;

connect().use(serveStatic(".")).listen(PORT);

console.log("Listening on port " + PORT);
