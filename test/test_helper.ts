const mongoose = require('mongoose');
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
        posts ? posts.drop().catch(_ => _) : null
    ])
    .then(() => done());
});
