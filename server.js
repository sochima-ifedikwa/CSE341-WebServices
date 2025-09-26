// express web server

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// import the routes
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
