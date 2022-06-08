var path = require("path");
var express = require("express");
var request = require("request");

const { createProxyMiddleware } = require('http-proxy-middleware');

// Define
const LOCAL_PATH = path.join(__dirname, "../build");

if (process.env.TARGET_ENV === "domain") {
    LOCAL_PATH = path.join(__dirname, "../build-domain");
}
 
console.log('LOCAL_PATH:', LOCAL_PATH);

var app = express(); // create express app
app.use(express.static(LOCAL_PATH));
app.use(express.static("public"));

var env = require("../env/env");

app.use('/api/', createProxyMiddleware({ target: env.MODE_ENV.local.api, changeOrigin: true, secure: false}));

// REACT
app.get('/*', (req, res) => {
    res.sendFile(LOCAL_PATH + "/index.html");
})

// START

const PORT = process.env.PORT || env.MODE_ENV.local.portServer;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})




