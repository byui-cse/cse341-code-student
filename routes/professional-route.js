const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional-controller');

router.get('/professional', professionalController.getProfessional);
router.post('/professional', professionalController.createProfessional);

module.exports = router;
