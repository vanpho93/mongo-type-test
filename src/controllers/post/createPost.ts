import { Request, Response } from 'express';
import Post from '../../models/post';

const createPost = (req: Request, res: Response) => {
    const { userId, content } = req['body'];
    Post.createPost(userId, content)
        .then(() => {
            res.status(201).send({ message: 'Create post successfully' })
        })
        .catch(err => {
            res.status(500).send({ message: 'Internal server error' });
        });
}

export default createPost;
