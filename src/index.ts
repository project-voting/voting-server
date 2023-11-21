import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { errorHandler } from '@handler/errorHandler'

// routes
import postRouter from '@routes/post-routes'
import voteRouter from '@routes/vote-routes'
import indexRouter from '@routes/index'

import { config } from './config'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


// 서버 초기화
function init() {
  indexRouter(app);

  // routers
  app.use('/post', postRouter);
  app.use('/vote', voteRouter);

  // 에러 핸들링 미들웨어는 라우트 정의 뒤에 위치해야함
  app.use(errorHandler)

  app.listen(config.port, () => console.log('server start port 8080'))
}

init()