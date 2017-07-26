import * as express from 'express';
import * as bodyPaser from 'body-parser';
import './startDatabase';

import createUser from './controllers/user/createUser';
import signIn from './controllers/user/signIn';
import createPost from './controllers/post/createPost';

const jsonParser = bodyPaser.json();
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.listen(3000, () => console.log('Server started'));

app.post('/api/user', jsonParser, createUser);

app.post('/api/user/signin', jsonParser, signIn);

app.post('/api/post', jsonParser, createPost);

/*

Create User
User make a post
User make a comment
Show all post

*/