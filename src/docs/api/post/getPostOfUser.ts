export const getPostOfUser = {
  '/post/user/{uid}': {
    get: {
      tags: ['Post'],
      summary: '유저 글 목록 조회',
      description: '유저 글 목록 조회',
      requestBody: {
        content: {
          'application/json': {
            schema: {

            }
          }
        }
      }
    }
  }
}