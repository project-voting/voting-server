const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const config = require('./config');

const app = express();

app.use(express.json()); // JSON 요청 본문 처리
app.use(cors());
app.use(bodyParser.json());

// router
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user-routes');
const postRouter = require('./routes/post-routes');

// 서버 초기화
function init() {
  app.get('/', (req, res) => res.send('Welcome Swagger Hanlder'));
  indexRouter(app);

  // routers
  app.use('/auth', authRouter);
  app.use('/post', postRouter);
  app.use('/api', userRouter);

  // open port
  app.listen(config.port, () => console.log('server start port 8080'));
}

init();
