// 유저 정보
export type UserType = {
  email: string;
  diplayName: string;
}

// 회원 가입
export interface CreateUserRequest {
  token: string;
  userInfo: UserType
}