const express = require('express');
const path = require('path');
const app = express();

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')));

app.get(['/teste123','/teste123/*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);  
