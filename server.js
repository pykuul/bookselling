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
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join+'public'));
app.use(morgan("dev"));

server.listen(port, () => console.log('server is running on port' + port));

app.post('/webhook', async (req, res) => {
    const event = req.body;

    res.status(500).send();

    if (event === "payment_intent.succeeded") {
        // Todo: send event to RabbitMQ instead of generating the PDF here
        // it's not good practiced to block a request hander with long processes

    }
});

// all other routes, prevent node crashing for undefined routes
app.route('*', async (req, res) => {
    res.json({ ok: 1 });
});

