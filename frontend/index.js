const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const exec = require('child_process').exec;

exec('rm -rf /home/exemvoox/exempliorevamp/build')
exec('git clone https://github.com/marcuscastelo/exemplio-build-frontend build');

const prefix = '';

app.use('*static', express.static(path.join(__dirname, 'build', 'static')));

app.get('/fallback', (req, res) => {
	res.status(301).redirect('/fallback/');
})

app.get('*/manifest.json', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'manifest.json'))
});

app.get(`${prefix}/favicon.png`, function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'favicon.png'));
});

app.get(`${prefix}/*`, function(req, res) {
  while(! fs.existsSync(path.join(__dirname, 'build', 'index.html')));
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get(prefix, function(req, res) {
  res.status(301).redirect(prefix + '/');
});

app.listen(9000);
