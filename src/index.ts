import * as express from 'express';
import * as bodyPaser from 'body-parser';
import './startDatabase';
import createUser from './controllers/user/createUser';

const jsonParser = bodyPaser.json();
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.listen(3000, () => console.log('Server started'));

app.post('/api/user', jsonParser, createUser);


/*

Create User
User make a post
User make a comment
Show all post

*/