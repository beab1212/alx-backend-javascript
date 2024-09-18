const express = require('express');

const app = express();

app.route('/', (req, res) => {
  res.status(200);
  res.send('Hello Holberton School!');
});

app.listen(1234);

module.exports = app;
