const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

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
