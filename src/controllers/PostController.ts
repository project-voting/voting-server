import firebase from '../db'
import Post from '@models/post'
import { Request, Response, NextFunction } from 'express'

import { CreatePostRequest, GetPostResponse } from '&types/postTypes'
import { sendSuccessResponse } from '@handler/responseHandler'
const firestore = firebase.firestore()

const PostController = {
  // 글 생성
  async createPost(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { content, voteTitles, uid } = req.body as CreatePostRequest;

      const newPost = Post.createNewPost(content, voteTitles, uid);
      console.log(newPost)
      await firestore.collection('posts').doc().set(Object.assign({}, newPost));
      sendSuccessResponse(res, { message: "글이 작성되었습니다." });
    } catch (error: any) {
      next(error)
    }
  },

  // 글 삭제
  async deletePost(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { postId } = req.params;
    try {
      const postSnapshot = await firestore.collection('posts').doc(postId);
      const postData = await postSnapshot.get();

      if (!postData.exists) {
        res.status(404).send('아이디가 유효하지 않습니다.');
      }
      else {
        sendSuccessResponse(res, { message: "글이 삭제되었습니다." })
        postSnapshot.delete()
      }
    }
    catch (error: any) {
      next(error)
    }
  },

  // 글 조회
  async getPost(req: Request, res: Response, next: NextFunction): Promise<void> {
    const postId = req.query.postId;

    // 특정 글 조회
    if (postId && typeof postId === 'string') {
      try {
        const postSnapshot = await firestore.collection('posts').doc(postId).get();

        const postData = postSnapshot.data() as GetPostResponse;
        const post = Post.getPostFromDB(postData.content, postData.voteData, postData.uid);

        sendSuccessResponse(res, { data: post, message: "글 조회를 성공했습니다." })
      }
      catch (error: any) {
        next(error)
      }
    }
    // 전체 글 조회
    else {
      try {
        const postSnapshot = await firestore.collection('posts').get();
        const postsArray: Post[] = [];

        // 가져온 데이터를 배열 형태로 가공
        postSnapshot.forEach((doc) => {
          const postData = doc.data() as GetPostResponse;
          const post_data = Post.getPostFromDB(postData.content, postData.voteData, postData.uid);
          postsArray.push(post_data);
        });

        sendSuccessResponse(res, { data: postsArray, message: "글 조회를 성공했습니다." })
      } catch (error: any) {
        next(error)
      }
    }
  }
}

export default PostController