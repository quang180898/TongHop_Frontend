var path = require("path");
var express = require("express");
var cors = require('cors')
var request = require("request");

const { createProxyMiddleware } = require('http-proxy-middleware');

// Define
const PORT = 5000;
const LOCAL_PATH = path.join(__dirname, "../dist");
console.log('LOCAL_PATH:', LOCAL_PATH);

var app = express(); // create express app
app.use(express.static(LOCAL_PATH));
app.use(express.static("public"));

app.use(cors());
app.use('/api/backend/', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true}));

// REACT
app.get('/*', (req, res) => {
    res.sendFile(LOCAL_PATH + "/index.html");
})

// START
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})




