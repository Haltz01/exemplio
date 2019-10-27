const express = require('express');
const path = require('path');
const app = express();

const prefix = '/revamp'

app.use('*static', express.static(path.join(__dirname, 'build', 'static')));


app.get(`${prefix}/*`, function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(prefix, function(req, res) {
  res.status(301).redirect(prefix + '/');
});

app.listen(9000);
