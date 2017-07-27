import { connection, connect, Error as MongooseError } from 'mongoose';
import mongoose = require('mongoose');
import Comment from './models/comment';
import Post from './models/post';
import User from './models/user';
import { createSampleDB } from './playground/createDb';
mongoose.Promise = global.Promise;

connect('mongodb://localhost/fb');

connection
.once('open', onOpen)
.on('error', (error: MongooseError) => console.log('database error'));

function onOpen() {
    Promise.all([
        Comment.ensureIndexes(),
        Post.ensureIndexes(),
        User.ensureIndexes(),
        createSampleDB()
    ])
    .then(() => console.log('Database is ready now!'));
}
