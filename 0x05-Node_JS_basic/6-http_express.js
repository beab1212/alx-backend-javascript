const express = require('express');

const app = express();

app.route('/', (req, res) => {
  res.status(200);
  res.send('Hello Holberton School!');
});

app.all('*', (req, res) => {
  const data = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /lskdlskd</pre>
    </body>
    </html>
  `;
  res.send(data);
});

app.listen(1234);

module.exports = app;
