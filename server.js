const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hi devi this is your node js 1 2');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
