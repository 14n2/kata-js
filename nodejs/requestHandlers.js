let fs = require("fs");
let path = require("path");
let formidable = require("formidable");

function start(res, req) {
    console.log("Request handler 'start' was called.");

    let content = `
        <!doctype html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello world</title>
        </head>
        <body>
        <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title">
        <br>
        <label for="description">Description</label>
        <br>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <br>
        <input type="file" name="photo" id="photo" accept="image/*">
        <br>
        <input type="submit" value="Upload photo">
        </form>
        </body>
        </html> 
    `;

    res.writeHead(200);
    res.write(content);
    res.end();
}

function upload(res, req) {
    console.log("Request handler 'upload' was called.");

    let form = formidable({multiples: true});
    console.log("About to parse request.");
    form.parse(req, (error, fields, files) => {
        console.log("Parsing done.\n" + JSON.stringify({fields, files}, null, 4));
        fs.renameSync(files.photo.path, "/tmp/test.png");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("received image:<br>");
        res.write("<img src='/show' width='100%'>");
        res.end();
    });
}

function show(res, req) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", "binary", (err, data) => {
        if (err) {
            res.writeHead(500);
            res.write(err + "\n");
            res.end();
            return;
        }
        res.writeHead(200);
        res.write(data, "binary");
        res.end();
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;