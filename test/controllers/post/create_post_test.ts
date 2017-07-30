import * as assert from 'assert';
import User from '../../../src/models/user';
import Post from '../../../src/models/post';
import { createUsers } from '../../../src/playground/createDb';
import app from '../../../src/app';
import * as request from 'supertest';
import 'mocha';

describe('Create Post test', () => {
    beforeEach(async () => {
        await createUsers(1);
    });

    it('User can create a post', async () => {
        const user = await User.findOne({  });
        const userId = user._id;
        const response = await request(app)
        .post('/api/post')
        .send({ userId, content: 'Javascript is awesome!' });
        assert(response.status === 201);
        const postCount = await Post.count({});
        assert(postCount === 1);
    });    
});
