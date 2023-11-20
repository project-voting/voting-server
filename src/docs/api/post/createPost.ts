export const createPost = {
  '/post/create': {
    post: {
      tags: ['Post'],
      summary: '투표 글 생성',
      description: '투표 글 생성',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                content: {
                  type: 'string',
                  description: '글 내용',
                  example: '짜장 vs 짬뽕'
                },
                voteTitles: {
                  type: 'object',
                  properties: {
                    leftTitle: {
                      type: 'string',
                      description: '좌측 항목에 표기할 텍스트',
                      example: '짜장'
                    },
                    rightTitle: {
                      type: 'string',
                      description: '우측 항목에 표기할 텍스트',
                      example: '짬뽕'
                    }
                  }
                },
                uid: {
                  type: 'string',
                  description: '글 생성을 하는 사용자의 uid',
                  example: 'yCPPi7L0a4ZyMvj2yBsbwdGm2S32'
                }
              }
            }
          }
        }
      },
      response: {
        200: {
          description: '글 생성 성공',
        }
      }
    }
  }
}