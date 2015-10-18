var express = require("express"),
    path = require("path"),
    PORT = 3000,
    app = express(),
    server;

app.get("/is.js", function(request, response) {
    response.sendFile(path.resolve("test/is.js"));
});

app.get("/", function(request, response) {
    response.sendFile(path.resolve("test/index.html"));
});

server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server started, listening on port %s", PORT);
});