import firebase from '../db'
import { Request, Response, NextFunction } from 'express'
import { CreateUserRequest } from '&types/authTypes'
import { sendSuccessResponse } from '@handler/responseHandler'

const firestore = firebase.firestore()

const AuthController = {
  // 토큰 확인
  async verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { token, userInfo } = req.body.token as CreateUserRequest;
      const decodedToken = await firebase.auth().verifyIdToken(token);
      const uid = decodedToken.uid;

      // 토큰 가지고 작업

    }
    catch (error: any) {
      next(error)
    }
  }
}

export default AuthController