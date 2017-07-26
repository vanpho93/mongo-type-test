import { Request, Response } from 'express';
import User from '../../models/user';
import Post from '../../models/post';

const createPost = (req: Request, res: Response) => {
    const { userId, content } = req['body'];
    const post = new Post({ content });
    post.save()
        .then(() => User.findByIdAndUpdate(userId, { $push: { posts: post } }))
        .then(() => {
            res.status(201);
            res.send({ message: 'Create post successfully' })
        })
        .catch(err => {
            res.status(500);
            res.send({ message: 'Internal server error' });
        });
}

export default createPost;
