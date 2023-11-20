type API = any; // API 타입에 대한 구체적인 정의가 필요합니다.

const swaggerOpenApiVersion = '3.0.0';

const swaggerInfo = {
  title: 'Voting-Server',
  version: '0.0.1',
  description: '',
};

const swaggerTags = [
  {
    name: 'User',
    description: '사용자 API',
  },
  {
    name: "Post",
    description: '투표 글 API'
  }
];

const swaggerSchemes = ['http', 'https'];

const swaggerSecurityDefinitions = {
  ApiKeyAuth: {
    type: 'apiKey',
    name: 'Authorization',
    in: 'header',
  },
};

const swaggerProduces = ['application/json'];

const swaggerServers = [
  {
    url: 'http://localhost:8080',
    description: '로컬 서버',
  },
];

const swaggerSecurityScheme = {
  bearerAuth: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'Token',
    name: 'Authorization',
    description: '인증 토큰 값을 넣어주세요.',
    in: 'header',
  },
};

const swaggerComponents = {
  JWT_ERROR: {
    description: 'jwt token Error',
    type: 'object',
    properties: {
      401: {
        type: 'Error token 변조 에러',
      },
    },
  },
  SERVER_ERROR: {
    description: 'SERVER ERROR',
    type: 'object',
    properties: {
      500: {
        type: 'Internal Error',
        code: 800,
      },
    },
  },
  DB_ERROR: {
    description: 'SERVER DB ERROR',
    type: 'object',
    properties: {
      500: {
        type: 'DB ERROR',
        code: 500,
      },
    },
  },
};

class Swagger {
  private static uniqueSwaggerInstance: Swagger;
  private paths: API[] = [];
  private option: any = {}; // option 타입에 대한 구체적인 정의가 필요합니다.
  private setUpOption: any = {}; // setUpOption 타입에 대한 구체적인 정의가 필요합니다.

  constructor() {
    if (!Swagger.uniqueSwaggerInstance) {
      this.init();
      Swagger.uniqueSwaggerInstance = this;
    }

    return Swagger.uniqueSwaggerInstance;
  }

  private init() {
    this.option = {
      definition: {
        openapi: swaggerOpenApiVersion,
        info: swaggerInfo,
        servers: swaggerServers,
        schemes: swaggerSchemes,
        securityDefinitions: swaggerSecurityDefinitions,
        produces: swaggerProduces,
        components: {
          securitySchemes: swaggerSecurityScheme,
          schemas: swaggerComponents,
        },
        tags: swaggerTags,
      },
      apis: [],
    };
    this.setUpOption = {
      explorer: true,
    };
  }

  public addAPI(api: API) {
    this.paths.push(api);
  }

  private processAPI() {
    const path: any = {}; // path 타입에 대한 구체적인 정의가 필요합니다.

    for (let i = 0; i < this.paths.length; i += 1) {
      for (const [key, value] of Object.entries(this.paths[i])) {
        path[key] = value;
      }
    }

    return path;
  }

  public getOption() {
    const path = this.processAPI();
    this.option.definition.paths = path;

    return {
      apiOption: this.option,
      setUpOption: this.setUpOption,
    };
  }
}

export default Swagger;
