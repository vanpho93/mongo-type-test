// This file init a small server, it's all about building UI, 
// do not contain any logic code here, it can be remove when release

const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/signin', (req, res) => res.render('signin'));
app.get('/signup', (req, res) => res.render('signup'));

app.listen(3000, () => console.log('Server started!'));

reload(app);
