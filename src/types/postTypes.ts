// 글 생성 - 투표 항목
export type CreatePostVoteType = {
  left: {
    title: string;
  },
  right: {
    title: string;
  }
}

// 글 생성 타입
export interface CreatePostRequest {
  content: string; // 글 내용
  voteTitles: CreatePostVoteType; // 투표 항목 제목
  uid: string; // 유저 아이디
}

// 글 조회 타입
export type GetPostResponse = IPost;

// 기본 투표 타입
export type DefaultPostVoteType = {
  left: {
    title: string; // 투표 항목명
    count: number; // 투표수
  },
  right: {
    title: string;
    count: number;
  }
}

// 기본 글 타입
export interface IPost {
  content: string;
  voteData: DefaultPostVoteType;
  uid: string;
}