import * as express from 'express';
import * as bodyPaser from 'body-parser';

import createUser from './controllers/user/createUser';
import signIn from './controllers/user/signIn';
import createPost from './controllers/post/createPost';
import createComment from './controllers/comment/create_comment';

const jsonParser = bodyPaser.json();
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.post('/api/user', jsonParser, createUser);

app.post('/api/user/signin', jsonParser, signIn);

app.post('/api/post', jsonParser, createPost);

app.post('/api/comment', jsonParser, createComment);

export default app;
