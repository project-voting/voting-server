export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string = 'Bad request') {
    super(message, 400);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = 'Not found') {
    super(message, 404);
  }

  // 여기에 추가적인 에러 클래스를 정의할 수 있습니다.
}
