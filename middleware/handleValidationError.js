// Catches errors thrown by the validate middleware
module.exports = (error, req, res, next) => {
  if (error.name === 'ValidationError' && error.status === 422) {
    return res.status(422).json({
      httpStatus: 422,
      message: error.message,
      errors: error.errors
    });
  }
  next(error);
};