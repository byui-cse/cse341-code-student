const express = require('express');
const app = express();

const bodyParser = require('body-parser');

bodyParser.urlencoded({ extended: false });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
