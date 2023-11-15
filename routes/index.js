const ApiDocs = require('../docs/index');

function getSwaggerOption() {
  const apiDocs = new ApiDocs();
  apiDocs.init();

  return apiDocs.getSwaggerOption();
}

/**
 *
 * @param {Express.Application} app
 */

module.exports = (app) => {
  const { swaggerUI, specs, setUpoption } = getSwaggerOption();

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, setUpoption));
};
