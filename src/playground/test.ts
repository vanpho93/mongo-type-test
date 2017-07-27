import { connection, connect, Error as MongooseError } from 'mongoose';
import * as faker from 'faker';
import User from '../models/user';
import Post from '../models/post';
import Comment from '../models/comment';
import mongoose = require('mongoose');

mongoose.Promise = global.Promise;
connect('mongodb://localhost/fb');
connection
    .once('open', createCommentForAllPost)
    .on('error', (error: MongooseError) => console.log('database error'));

interface UserInfo {
    name: String;
    email: String;
    password: String;
}



function getRandomUserInfo(): UserInfo {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    return { name, email, password };
}

function createUsers(numberOfUser: Number) {
    const arrUser: User[] = [];
    for (let i = 0; i < numberOfUser; i++) {
        arrUser.push(new User(getRandomUserInfo()));
    }
    User.insertMany(arrUser)
        .then(() => console.log('Them thanh cong!'))
        .catch(() => console.log('Them that bai'));
}

async function createPostsForAllUser() {
    const users = await User.find() as User[];
    for (let i = 0; i < users.length; i++) {
        const postNumber = Math.random() * 5;
        for (let j = 0; j < postNumber; j++) {
            const id = users[i]._id;
            const content = faker.lorem.paragraph(5);
            await User.createPost(id, content);
        }
    }
}

// Do not recognize that a user hava an posts prop

async function createCommentForAllPost() {
    const users: User[] = await User.find().populate({ path: 'posts' }) as User[];
    for (let i = 0; i < users.length; i++) {
        //for each user in users
        const idUser = users[i]._id;
        const posts = users[i].posts;
        for (let j = 0; j < posts.length; j++) {
            const commentNumber = Math.random() * 5;
            for (let k = 0; k < commentNumber; k++) {
                let idPost = posts[j]._id;
                const content = faker.lorem.sentence(10);
                await Comment.createComment(idUser, idPost, content);
            };
        }
    }
}

async function removeAll() {
    
}
