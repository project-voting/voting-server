import express, { Router } from 'express';
import PostController from '@controllers/PostController';

const postRouter: Router = express.Router();

postRouter.post('/create', PostController.createPost);
postRouter.delete('/delete/:postId', PostController.deletePost);
postRouter.get('/', PostController.getPost);
postRouter.get('/user/:uid', PostController.getPostOfUser);

export default postRouter;