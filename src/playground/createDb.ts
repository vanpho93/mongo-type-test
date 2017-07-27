// Create 10 users
// With each user, create some post
// With each post, create some comment

import * as faker from 'faker';
import User from '../models/user';
import Post from '../models/post';
// Create 10 user here

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

export function createUsers(numberOfUser: Number) {
    const arrUser: User[] = [];
    for (let i = 0; i < numberOfUser; i++) {
        arrUser.push(new User(getRandomUserInfo()));
    }
    return User.insertMany(arrUser);
}

export async function createPosts() {
    try {
        const users = await User.find();
        for(let i = 0; i < users.length; i++) {
            const postNumber = Math.random() * 5;
            const userId = users[i]._id;
            for (let j = 0; j < postNumber; j++) {
                const content = faker.lorem.paragraph(5);
                await Post.createPost(userId, content);
            }
        }
    } catch (error) {
        
    }
}