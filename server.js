const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

let env = process.env.NEXT_PUBLIC_ENV;

const hostname = "localhost";
let port=process.env.NEXT_PUBLIC_PORT
if(!port){
  port=process.env.NEXT_PUBLIC
}
if(!env){
  env=process.env.ENV || 3100;
}
const dev = process.env.NEXT_PUBLIC_ENV!== "prod";
console.log("port",port)
const app = next({ dev:true, hostname, port:3100 });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
