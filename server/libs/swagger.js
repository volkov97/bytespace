const swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'Bytespace API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/api/',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,

    // path to the API docs
    apis: [
        `${__dirname}/../controllers/*.js`,
        `${__dirname}/../models/*.js`
    ],
};

module.exports = swaggerJSDoc(options);