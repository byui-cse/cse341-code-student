module.exports = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  
  console.error('UNHANDLED ERROR:', error);

  res.status(error.status || 500).json({
    httpStatus: error.status || 500,
    message: error.message || 'Internal Server Error',
  });
};