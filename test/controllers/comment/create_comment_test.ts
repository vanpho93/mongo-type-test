import * as assert from 'assert';
import User from '../../../src/models/user';
import Post from '../../../src/models/post';
import Comment from '../../../src/models/comment';
import { createUsers, createPosts } from '../../../src/playground/createDb';
import app from '../../../src/app';
import * as request from 'supertest';
import 'mocha';

describe.only('Create Post test', () => {
    beforeEach(async () => {
        await createUsers(1);
        await createPosts();
    });

    it('User can create a post', async () => {
        const user = await User.findOne({  }) as User;
        const userId = user._id;
        const postId = user.posts[0];
        const response = await request(app)
            .post('/api/comment')
            .send({ userId, postId, content: 'This is the best post!' });
        assert(response.status === 201);
    });    
});
