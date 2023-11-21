// 투표 타입
export interface VotingPostRequest {
  uid: string; // 사용자 id
  postId: string; // 글 id  
  voteOption: "left" | "right"; // 투표 항목
}