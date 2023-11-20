import { Request, Response, NextFunction } from 'express';
import { CustomError } from './CustomError';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err); // 서버 로그에 에러 출력
  return res.status(500).json({ message: 'Internal Server Error' });
}
