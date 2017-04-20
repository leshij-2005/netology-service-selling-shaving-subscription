const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

app.use(express.static(__dirname + '/../'));