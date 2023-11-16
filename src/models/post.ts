import { IPost, DefaultPostVoteType } from '&types/postTypes'

/** post 모델 */
class Post implements IPost {
  content: string;
  voteData: DefaultPostVoteType;
  uid: string;

  constructor(content: string, voteData: DefaultPostVoteType, uid: string) {
    this.content = content;
    this.voteData = voteData;
    this.uid = uid;
  }

}

export default Post;
