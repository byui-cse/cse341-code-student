const { body, param, header, validationResult } = require('express-validator');

// Validation rules and error extraction for temples

const templeValidationRules = () => {
  return [
    body('temple_id').isInt().withMessage('temple_id must be an integer'),
    body('name').notEmpty().withMessage('name cannot be empty').isString(),
    body('location').optional().isString(),
    body('dedicated').optional().isString(),
    body('additionalInfo').optional().isBoolean(),
  ];
};

const templeIdParamRule = () => {
  return [
    param('temple_id').isInt().withMessage('temple_id in URL must be an integer'),
  ];
};

const apiKeyHeaderRule = () => {
  return [
    header('apiKey')
      .equals('Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N')
      .withMessage('Invalid apiKey, please read the documentation.'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  const error = new Error('Validation failed');
  error.name = 'ValidationError';
  error.status = 422;
  error.errors = extractedErrors;
  
  next(error);
};

module.exports = {
  templeValidationRules,
  templeIdParamRule,
  apiKeyHeaderRule,
  validate,
};