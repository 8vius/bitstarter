var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content = fs.readFileSync('index.html', function (err, data) {
        if (err) throw err;
        console.log(data);
    });

    var buf = new Buffer(content, "utf-8")

    response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
