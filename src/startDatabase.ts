import { connection, connect, Error as MongooseError } from 'mongoose';
import mongoose = require('mongoose');

mongoose.Promise = global.Promise;

connect('mongodb://localhost/fb');

connection
.once('o', () => console.log('database opened!'))
.on('error', (error: MongooseError) => console.log('database error'));

import './models/comment';
import './models/post';
import './models/user';
