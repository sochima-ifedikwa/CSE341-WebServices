// express web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Irene Dadzie');
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
