const mongoose = require('mongoose');
const professionalSchema = mongoose.Schema(
  {
    professionalName: {
      type: String,
      required: [true, 'Professional Name is required'],
    },
    base64Image: { type: String, required: [true, 'Image is required'] },
    primaryDescription: {
      type: String,
      required: [true, 'Primary Description is required'],
    },
    workDescription: {
      type: String,
      required: [true, 'Work Description is required'],
    },
    linkTitleText: {
      type: String,
      required: [true, 'Link Title Text is required'],
    },
    linkedInLink: {
      type: String,
      required: [true, 'LinkedIn Link is required'],
    },
    githubLink: { type: String, required: [true, 'GitHub Link is required'] },
  },
  {
    timestamps: true,
  }
);

const Professional = mongoose.model('Professional', professionalSchema);
module.exports = Professional;
