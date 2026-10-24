const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description:
      'API for managing temples of The Church of Jesus Christ of Latter-day Saints. CSE 341 Project - BYU-Idaho.',
    version: '1.0.0',
    contact: {
      name: 'Jesus Tortolero',
    },
  },
  host: 'localhost:8080',
  schemes: ['http', 'https'],
  definitions: {
    Temple: {
      temple_id: 'SLC',
      name: 'Salt Lake Temple',
      description: 'Main temple in Salt Lake City, Utah',
      location: 'Salt Lake City, Utah, USA',
      dedicated: '1893-04-06',
      additionalInfo: 'Additional temple information',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('✅ swagger.json generated successfully.');
});