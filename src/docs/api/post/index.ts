import { createPost } from './createPost'
import { deletePost } from './deletePost'
import { getPost } from './getPost'
import { getPostOfUser } from './getPostOfUser'

export default {
  ...createPost,
  ...deletePost,
  ...getPost,
  ...getPostOfUser
}