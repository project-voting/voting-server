export const voting = {
  '/vote/voting': {
    post: {
      tags: ["Vote"],
      summary: "투표",
      description: "글 투표",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              properties: {
                uid: {
                  type: "string",
                  description: "사용자 id",
                  example: "uid"
                },
                postId: {
                  type: "string",
                  description: "글 id",
                  example: "post id"
                },
                voteOption: {
                  type: "string",
                  description: "left || right",
                  example: "left"
                }
              }
            }
          }
        }
      },
      response: {
        200: {
          description: '투표 성공'
        }
      }
    }
  }
}