// Create 10 users
// With each user, create some post
// With each post, create some comment

import * as faker from 'faker';
import User from '../models/user';
import Post from '../models/post';
import Comment from '../models/comment';
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
            // Each person get a random posts number, maximum is 5
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

export async function createComments() {
    try {
        const users = await User.find({  }) as User[];
        const posts = await Post.find({  });
        for (let i = 0; i < posts.length; i++) {
            const commentNumber = Math.random() * 10;
            for (let j = 0; j < commentNumber; j++) {
                const content = faker.lorem.sentence();
                const userId = getRandomUserId(users);
                const postId = posts[i]._id;
                await Comment.createComment(userId, postId, content);
            }
        }
    } catch (error) {
        
    }

    function getRandomUserId(users: User[]): String {
        const index = Math.floor(Math.random() * users.length);
        return users[index]._id;
    }
}

// Run create DB
export async function createSampleDB() :Promise<String> {
    const users = await User.find({  });
    if (users.length < 5) {
        await createUsers(10);
        await createPosts();
        await createComments();
    }
    return 'Create sample database finished';
}
