import * as assert from 'assert';
import Post from '../../../src/models/post';
import User from '../../../src/models/user';
import 'mocha';

describe('Post creation test', () => {
    it('Using static create post in Post model', async () => {
        // Init data to test
        const pho = new User({ name: 'Pho', password: '123', email: 'vanpho01@gmail.com' });
        await pho.save();
        await Post.createPost(pho._id, 'AAA');
        // Start assert things
        const user = await User.findOne() as User;
        const post = await Post.findOne() as Post;
        assert(post.content === 'AAA');
        assert(user.posts[0].toString() === post._id.toString());
    });
});
