export const deletePost = {
  '/post/delete/{postId}': {
    delete: {
      tags: ['Post'],
      summary: '투표 글 삭제',
      description: '투표 글 삭제 (포스트 키 값 파라미터로 전달)',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                postId: {
                  type: 'string',
                  description: '포스트 키',
                }
              }
            }
          }
        }
      }
    }
  }
}