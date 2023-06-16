const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

app.get('/babbage', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'babbage.html'));
});

app.get('/berners-lee', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'berners-lee.html'));
});

app.get('/clarke', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'clarke.html'));
});

app.get('/hamilton', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'hamilton.html'));
});

app.get('/hopper', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'hopper.html'));
});

app.get('/lovelace', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'lovelace.html'));
});

app.get('/turing', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'turing.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', '404.html'));
});

app.listen(PORT, () =>
  console.log(`Server corriendo en http://localhost:${PORT}`)
);
