import { Response } from 'express'

interface ResponseData {
  data?: any;
  message?: string;
}

// 성공 
export function sendSuccessResponse(res: Response, responseData: ResponseData, statusCode: number = 200) {
  res.status(statusCode).json({
    data: responseData.data || [],
    message: responseData.message || 'Operation successful',
    status: 'success'
  });
}

// 에러
export function sendErrorResponse(res: Response, errorMessage: string, statusCode: number = 400) {
  res.status(statusCode).json({
    message: errorMessage,
    status: 'error'
  });
}