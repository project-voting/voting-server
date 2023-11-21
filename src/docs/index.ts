import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import Swagger from 'src/handler/swagger';

import auth from './api/auth/index';
import post from './api/post/index'
import vote from './api/vote/index';

class ApiDocs {
  private apiDocOption: any; // apiDocOption의 타입을 명시하거나 any로 설정
  private swagger: Swagger;

  constructor() {
    this.apiDocOption = {
      ...auth,
      ...post,
      ...vote
    };

    this.swagger = new Swagger();
  }

  init() {
    this.swagger.addAPI(this.apiDocOption);
  }

  getSwaggerOption() {
    const { apiOption, setUpOption } = this.swagger.getOption();

    const specs = swaggerJsDoc(apiOption);

    return {
      swaggerUI,
      specs,
      setUpOption,
    };
  }
}

export default ApiDocs;
