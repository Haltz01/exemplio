const express = require('express');
const path = require('path');
const app = express();

const exec = require('child_process').exec;

exec('git clone https://github.com/marcuscastelo/exemplio-build-frontend build');

const prefix = '/revamp';

app.use('*static', express.static(path.join(__dirname, 'build', 'static')));

app.get(`${prefix}/favicon.png`, function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'favicon.png'));
});

app.get(`${prefix}/*`, function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(prefix, function(req, res) {
  res.status(301).redirect(prefix + '/');
});

app.listen(9000);
