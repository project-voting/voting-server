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

  // 글 생성 메소드
  static createNewPost(content: string, voteTitles: { leftTitle: string, rightTitle: string }, uid: string): Post {
    const voteData: DefaultPostVoteType = {
      left: { title: voteTitles.leftTitle, count: 0 },
      right: { title: voteTitles.rightTitle, count: 0 }
    };
    return new Post(content, voteData, uid);
  }

  // 글 조회 메소드
  static getPostFromDB(content: string, voteData: DefaultPostVoteType, uid: string) {
    return new Post(content, voteData, uid)
  }

}

export default Post;
