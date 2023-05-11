const Professional = require('../models/professional-model');

const professionalController = {};

// Create a new professional
professionalController.createProfessional = async (req, res) => {
  try {
    const professional = await Professional.create(req.body);
    res.status(201).json(professional);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all professionals
professionalController.getProfessional = async (req, res) => {
  try {
    const professional = await Professional.find();
    res.status(200).json(professional);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = professionalController;
