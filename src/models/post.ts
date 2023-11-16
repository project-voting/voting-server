export type PostVoteType = {
  left: {
    title: string; // 투표 항목명
    count?: number; // 투표수
  },
  right: {
    title: string;
    count?: number;
  }
}

export interface IPost {
  content: string;
  voteData: PostVoteType;
  uid: string; // 유저 pk
}

/** post 모델 */
class Post implements IPost {
  content: string;
  voteData: PostVoteType;
  uid: string;

  constructor(content: string, voteData: PostVoteType, uid: string) {
    this.content = content;
    this.voteData = voteData;
    this.uid = uid;
  }

}

export default Post;
