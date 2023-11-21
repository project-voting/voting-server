import firebase from '../db'
import { Request, Response, NextFunction } from 'express'
import { sendSuccessResponse, sendErrorResponse } from '@handler/responseHandler'
import { NotFoundError, AlreadyVotedError } from '@handler/CustomError'

import { VotingPostRequest } from '&types/voteTypes'

const firestore = firebase.firestore();

const VoteController = {
  // 투표
  async voting(req: Request, res: Response, next: NextFunction) {
    const { uid, postId, voteOption } = req.body as VotingPostRequest;
    try {
      const postRef = firestore.collection('posts').doc(postId);
      const postSnapshot = await postRef.get();

      const postData = postSnapshot.data();

      // voteData 필드 확인
      if (!postData || !postData.voteData) {
        throw new NotFoundError("투표 데이터가 없습니다.")
      }

      // 이미 투표했는지 확인
      if (postData.votedUsers && postData.votedUsers.includes(uid)) {
        throw new AlreadyVotedError()
      }

      // 투표 카운트 업데이트
      postData.voteData[voteOption].count += 1;
      if (!postData.votedUsers) {
        postData.votedUsers = [];
      }
      postData.votedUsers.push(uid);

      // 데이터베이스에 업데이트
      await postRef.update(postData);

      sendSuccessResponse(res, { message: "투표를 완료했습니다." })
    }
    catch (error) {
      next(error)
    }
  }

}

export default VoteController