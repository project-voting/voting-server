import express from 'express';
import ApiDocs from 'src/docs';

function getSwaggerOption() {
  const apiDocs = new ApiDocs();
  apiDocs.init();

  return apiDocs.getSwaggerOption();
}

export default (app: express.Application) => {
  const { swaggerUI, specs, setUpOption } = getSwaggerOption();

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs, setUpOption));
};
