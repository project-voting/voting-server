import { createPost } from './createPost'
import { deletePost } from './deletePost'
import { getPost } from './getPost'

export default {
  ...createPost,
  ...deletePost,
  ...getPost
}