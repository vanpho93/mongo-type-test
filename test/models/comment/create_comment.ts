import * as assert from 'assert';
import 'mocha';

import Comment from '../../../src/models/comment';
import Post from '../../../src/models/post';
import User from '../../../src/models/user';

describe('Create comment', () => {
    it('Can create comment using static method', async () => {
        //Create things
        const pho = new User({ email: 'vanpho01@gmail.com' });
        const teo = new User({ email: 'vanpho02@gmail.com' });
        await teo.save();
        await pho.save();
        const idPost = await Post.createPost(pho._id, 'AAA');
        await Comment.createComment(teo._id, idPost, 'Hay');

        //Check
        const comment = await Comment.findOne() as Comment;
        assert(comment.content === 'Hay');
        assert(comment.user.toString() === teo._id.toString());
    });
});
