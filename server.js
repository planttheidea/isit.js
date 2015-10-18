var express = require("express"),
    path = require("path"),
    PORT = 3000,
    app = express(),
    server;

app.get("/*.js", function(request, response) {
    response.sendFile(path.resolve("lib", request.url.slice(1)));
});

app.get("/", function(request, response) {
    response.sendFile(path.resolve("test/index.html"));
});

server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server started, listening on port %s", PORT);
});