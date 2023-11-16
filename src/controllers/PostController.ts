import firebase from '../db'
import Post, { IPost, PostVoteType } from '@models/post'
import { Request, Response } from 'express'
const firestore = firebase.firestore()

const PostController = {
  // 글 작성
  async createPost(req: Request, res: Response): Promise<void> {
    try {
      const data: IPost = req.body;
      // const initialVoteData: PostVoteType = {
      //   left: {
      //     title: data.voteData.title,
      //     count: 0
      //   }
      // }
      const newPost = new Post(data.content, data.voteData, data.uid);

      await firestore.collection('posts').doc().set(Object.assign({}, newPost));
      res.send('새 글이 작성되었습니다.');
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  },

  // 글 삭제
  async deletePost(req: Request, res: Response): Promise<void> {
    const { postId } = req.params;
    try {
      const postSnapshot = await firestore.collection('posts').doc(postId);
      const postData = await postSnapshot.get();

      if (!postData.exists) {
        res.status(404).send('아이디가 유효하지 않습니다.');
      }
      else {
        res.send('글이 삭제되었습니다.');
        postSnapshot.delete()
      }
    }
    catch (error: any) {
      res.status(400).send(error.message)
    }
  },

  // 글 조회
  async getPost(req: Request, res: Response): Promise<void> {
    const postId = req.query.postId;

    // 특정 글 조회
    if (postId && typeof postId === 'string') {
      try {
        const postSnapshot = await firestore.collection('posts').doc(postId).get();
        const postData = postSnapshot.data() as IPost;

        res.send(postData);
      }
      catch (error: any) {
        res.status(400).send(error.message)
      }
    }
    // 전체 글 조회
    else {
      try {
        const postSnapshot = await firestore.collection('posts').get();
        const postsArray: Post[] = [];

        postSnapshot.forEach((doc) => {
          const postData = doc.data() as IPost;
          const post_data = new Post(postData.content, postData.voteData, postData.uid);
          postsArray.push(post_data);
        });

        res.send(postsArray);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    }
  }
}

export default PostController