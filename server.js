`use strict`
const express = require("express");
const path = require('path');
const http = require('http');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.set('view engine','ejs');
app.set('views', path.join+'views');
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join+'public'));
app.use(morgan("dev"));

server.listen(port, () => console.log('server is running on port' + port));