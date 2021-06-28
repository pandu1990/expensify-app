const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');
const indexFilePath = path.join(publicPath, 'index.html');

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(indexFilePath);
});

app.listen(port, () => {
  console.log('Server is up');
});
