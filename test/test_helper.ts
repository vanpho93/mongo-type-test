import mongoose = require('mongoose');
import User from '../src/models/user';
import Post from '../src/models/post';
import Comment from '../src/models/comment';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fb_test');

mongoose.connection
.once('open', _ => _)
.on('error', _ => _);

beforeEach((done) => {
    const { users, posts, comments } = mongoose.connection.collections;
    Promise.all([
        users ? users.drop().catch(_ => _) : null, 
        comments ? comments.drop().catch(_ => _) : null, 
        posts ? posts.drop().catch(_ => _) : null,
        User.ensureIndexes(),
        Post.ensureIndexes(),
        Comment.ensureIndexes()
    ])
    .then(() => done());

});
