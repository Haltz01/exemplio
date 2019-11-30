const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const child_process = require('child_process');

function systemSync(cmd) {
  try {
    return child_process.execSync(cmd).toString();
  } 
  catch (error) {
    error.status;  // Might be 127 in your example.
    error.message; // Holds the message you typically want.
    error.stderr;  // Holds the stderr output. Use `.toString()`.
    error.stdout;  // Holds the stdout output. Use `.toString()`.
  }
};

// console.log(systemSync('rm -rf ' + path.join(__dirname, 'build')));
// console.log(systemSync('git clone https://github.com/marcuscastelo/exemplio-build-frontend build');
// console.log(systemSync("cd build; (git fetch && git status | grep 'up to date') && (git status -s | grep '.' && (echo 'Atualizando' && git fetch --all && git reset --hard origin/master) || echo 'Já atualizado') || (echo 'Atualizando' && git fetch --all && git reset --hard origin/master)"));
console.log(systemSync("cd build; git pull"));


const prefix = '';

app.use('*static', express.static(path.join(__dirname, 'build', 'static')));

app.get('/fallback', (req, res) => {
	res.status(301).redirect('/fallback/');
})

app.get('*/manifest.json', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'manifest.json'));
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

app.get("*", (req, res) => {
    res.status(502).send("Unavailable resource");
});

app.listen(9000, ()=> {
  console.log('Server listening on port 9000');
});
