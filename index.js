const express = require('express');
const path = require('path');

const app = express()

app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

var d = new Date();
today = d.getDay();

var hourNow = d.getHours();

if ((today <6 && today>0) && (hourNow<17 && hourNow>9) ) {
  app.get('/', (req, res) => {
  res.status(200).render('index');
});
app.get('/service', (req, res) => {
  res.status(200).render('service');
});
app.get('/contact', (req, res) => {
  res.status(200).render('contact');
});}
else{
  app.get('/', (req, res) => {
    res.status(200).render('off');
  });
}

app.listen(7000, () => {
  console.log("the server in running on port 7000")
})