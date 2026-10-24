const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// Import validation rules and the error catcher middleware
const {
  templeValidationRules,
  templeIdParamRule,
  apiKeyHeaderRule,
  validate,
} = require('../validators/templeValidator.js');

// Added apiKey validation to findAll
routes.get('/', apiKeyHeaderRule(), validate, temples.findAll);

// Added apiKey and parameter validation to findOne
routes.get('/:temple_id', 
  apiKeyHeaderRule(), 
  templeIdParamRule(), 
  validate, 
  temples.findOne
);

// Added apiKey and body validation to create
routes.post('/', 
  apiKeyHeaderRule(), 
  templeValidationRules(), 
  validate, 
  temples.create
);

// Added apiKey, parameter, and body validation to update
routes.put('/:temple_id', 
  apiKeyHeaderRule(), 
  templeIdParamRule(), 
  templeValidationRules(), 
  validate, 
  temples.update
);

// Added apiKey and parameter validation to delete
routes.delete('/:temple_id', 
  apiKeyHeaderRule(), 
  templeIdParamRule(), 
  validate, 
  temples.delete
);

module.exports = routes;