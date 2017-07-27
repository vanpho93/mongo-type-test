import * as assert from 'assert';
import User from '../../src/models/user';
import Post from '../../src/models/post';

import { createUsers, createPosts } from '../../src/playground/createDb';
import 'mocha';


describe.only('Create database', () => {
    it('Create 10 users', async () => {
        await createUsers(10);
        const count = await User.count({ });
        assert(count === 10);
    });

    it('Create posts for users', async () => {
        await createUsers(10);
        await createPosts();
        const postCount = await Post.count({ });
        const users = await User.find({ }) as User[];
        const arrPostLenght = users.map(e => e.posts.length);
        const totalPost = arrPostLenght.reduce((a, b) => a + b);
        assert(postCount === totalPost);
    });
});
