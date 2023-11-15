const firebase = require('../db');
const firestore = firebase.firestore();
const Post = require('../models/post');

const PostController = {
  // 글 작성
  async createPost(req, res) {
    try {
      const data = req.body;
      const user = await firestore.collection('posts').doc().set(data);
      res.send('새 글이 작성되었습니다.');
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // 글 삭제
  async deletePost(req, res) {
    const { postId } = req.params;

    try {
      const postSnapshot = await firestore.collection('posts').doc(postId);
      const postData = await postSnapshot.get();

      if (!postData.exists) {
        res.status(404).send('아이디가 유효하지 않습니다.');
      } else {
        res.send('글이 삭제되었습니다.');
        postSnapshot.delete();
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // 글 조회
  async getPosts(req, res) {
    const postId = req.query.postId;

    // 특정 글 조회
    if (postId) {
      try {
        const snapshot = await firestore.collection('posts').doc(postId);
        const postData = await snapshot.get();

        res.send(postData);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    // postId가 없을 경우 전체 글 조회
    else {
      try {
        const snapshot = await firestore.collection('posts').get();
        const data = snapshot;
        const postsArray = [];

        snapshot.forEach((doc) => {
          const post_data = new Post(doc.data().title, doc.data().content);
          postsArray.push(post_data);
        });

        res.send(postsArray);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
  },
};

module.exports = PostController;
