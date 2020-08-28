const express = require('express');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || '3003';

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Curalert is listning at http://localhost:${PORT}`);
});
