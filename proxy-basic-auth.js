const https = require('https');
const httpProxy = require('http-proxy');
const fs = require("fs");
const auth = require("basic-auth")
const compare = require("tsscmp")

var proxy = httpProxy.createProxyServer();

var server = https.createServer(
  {
    key: fs.readFileSync('private'),//This is the private key
    cert: fs.readFileSync('certificate'), //This is the certificate (public key)
  }, function (req, res) {
    var credentials = auth(req)
    if(!credentials || !check(credentials.name, credentials.pass)){
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", "Basic realm='squid.ricks.io'");
    res.end("Access Denied")
    } else{
    console.log("Proxying to 80");
    proxy.web(req, res, {
      target: 'http://127.0.0.1:80',
    }
    );
    }
  });

function check(name, pass){
var valid = true;
vaild = compare(name, 'username') && valid;
valid = compare(pass, 'password') && valid;
return valid
//from https://www.npmjs.com/package/basic-auth
}

console.log("listening on port 443")
server.listen(443);
