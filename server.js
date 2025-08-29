// express web server

const express = require('express');
const app = express();
const port = 3000;

// import the controllers in here
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.homeRoute);
app.get('/dadzie', lesson1Controller.dadzieRoute);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
