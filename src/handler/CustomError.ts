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
}

/** 투표 관련 에러 */
export class AlreadyVotedError extends CustomError {
  constructor(message: string = "이미 투표했습니다.") {
    super(message, 400)
  }
}