const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;

// SSL certificates - replace with your own
const options = {
  key: fs.readFileSync('mykey.pem'),
  cert: fs.readFileSync('mycert.pem')
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server with SSL
https.createServer(options, app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
