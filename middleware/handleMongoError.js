module.exports = (error, req, res, next) => {
  if (error.name === 'CastError') {
    return res.status(400).json({
      httpStatus: 400,
      message: `Invalid format for field '${error.path}': ${error.value}`,
    });
  }

  if (error.code === 11000) {
    const duplicatedField = error.keyValue ? Object.keys(error.keyValue)[0] : 'unknown';
    return res.status(409).json({
      httpStatus: 409,
      message: `Duplicate value for field '${duplicatedField}'`,
    });
  }

  if (error.name === 'MongoError' || error.name === 'MongoServerError') {
    return res.status(503).json({
      httpStatus: 503,
      message: 'Database service unavailable. Please try again later.',
    });
  }

  next(error);
};