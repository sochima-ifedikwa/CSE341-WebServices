const homeRoute = (req, res) => {
  res.send('Hello World!');
};

const dadzieRoute = (req, res) => {
  res.send('Irene Dadzie');
};
module.exports = { 
    homeRoute, 
    dadzieRoute 
};