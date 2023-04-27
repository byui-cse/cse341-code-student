const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const port = process.env.PORT;
const host = process.env.HOST;
const mongodb = process.env.MONGO_URI;
app.use('/', require('./routes/professional-route'));

mongoose
  .connect(mongodb, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running at http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });
