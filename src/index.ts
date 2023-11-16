import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// routes
import postRouter from '@routes/post-routes'
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

  app.listen(config.port, () => console.log('server start port 8080'))
}

init()