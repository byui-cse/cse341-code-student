const db = require('../models');
const Temple = db.temples;


// Changed to async/await, removed manual validation (will be handled by express-validator later)
exports.create = async (req, res) => {
  const temple = new Temple({
    temple_id: req.body.temple_id,
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    dedicated: req.body.dedicated,
    additionalInfo: req.body.additionalInfo,
  });

  const data = await temple.save();
  res.status(201).send(data);
};

// Changed to async/await, removed manual apiKey validation (will be moved to middleware later)
exports.findAll = async (req, res) => {
  const data = await Temple.find(
    {},
    {
      temple_id: 1,
      name: 1,
      location: 1,
      dedicated: 1,
      additionalInfo: 1,
      _id: 0,
    }
  );
  res.send(data);
};

// Changed to async/await, fixed the find() array bug by using findOne(), and throwing a 404 error
exports.findOne = async (req, res) => {
  const temple_id = req.params.temple_id;
  
  const data = await Temple.findOne({ temple_id: temple_id });
  
  if (!data) {
    const error = new Error(`Not found Temple with id ${temple_id}`);
    error.status = 404;
    throw error;
  }
  
  res.send(data);
};

// Changed to async/await, throwing 404 error, and added runValidators option
exports.update = async (req, res) => {
  const id = req.params.temple_id;

  const data = await Temple.findOneAndUpdate({ temple_id: id }, req.body, {
    new: true,
    runValidators: true
  });

  if (!data) {
    const error = new Error(`Cannot update Temple with temple_id=${id}. Maybe Temple was not found!`);
    error.status = 404;
    throw error;
  }

  res.send({ message: 'Temple was updated successfully.', data });
};

// Changed to async/await and throwing 404 error
exports.delete = async (req, res) => {
  const id = req.params.temple_id;

  const data = await Temple.findOneAndDelete({ temple_id: id });

  if (!data) {
    const error = new Error(`Cannot delete Temple with temple_id=${id}. Maybe Temple was not found!`);
    error.status = 404;
    throw error;
  }

  res.send({ message: 'Temple was deleted successfully!' });
};
