// var connect = require('connect');
// var serveStatic = require('serve-static');
// var livereload = require('livereload');
//
// const PORT=8080;
// var server = connect().use(serveStatic(__dirname)).listen(8080);
//
// //Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });
//
// var lr = livereload.createServer();
// lr.watch(__dirname + "/json");

// var server = livereload.createServer({
//     exts: [
//         'dust'
//     ]
// });
//
// server.watch(__dirname + '/json');


var staticServer = require('node-static');
var io = require('socket.io');
var fs = require('fs');
var http = require('http');

var file = new staticServer.Server('.', { cache: false });
var app = http.createServer(function (request, response) {

    request.addListener('end', function () {
        // Serve those files!
        file.serve(request, response);
    }).resume();
}).listen(8080);
console.log("Server listening, watching for file changes");
io = io(app);
io.on('connection', function (socket) {

  fs.watchFile('dark-v9-streets-v7.json', function (curr, prev) {
    socket.emit('jsonChanged');

  });

});
