import * as assert from 'assert';
import User from '../../src/models/user';
import Post from '../../src/models/post';
import Comment from '../../src/models/comment';

import { createUsers, createPosts, createComments } from '../../src/playground/createDb';
import 'mocha';


xdescribe('Create database', () => {
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

    it('Create comments for posts', async () => {
        await createUsers(10);
        await createPosts();
        await createComments();

        const commentCount = await Comment.count({ });
        const posts = await Post.find({ }) as Post[];
        const arrCommentLenght = posts.map(e => e.comments.length);
        const totalComment = arrCommentLenght.reduce((a, b) => a + b);
        assert(commentCount === totalComment);
    });
});
