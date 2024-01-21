const express = require('express');

const professionalController = require('./controllers/professional');

const router = express.Router();

// GET /feed/posts

router.get('/professional', professionalController.getData);
// localhost:8080/professional/
module.exports = router;