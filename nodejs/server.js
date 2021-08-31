let http = require("http");

// let url = require("url");

function start(route, handle) {
    const PORT = 8897;

    function onRequest(req, res) {
        let pathname = req.url;
        // let pathname = new URL(req.url, "http://localhost:8897").pathname;
        // let pa= url.parse(req.url).pathname; // XXX
        console.log(`request for ${pathname} received.`);

        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(PORT);

    console.log(`Server has started. Connect to http://localhost:${PORT}.`);
}

exports.start = start;