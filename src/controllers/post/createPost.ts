import { Request, Response } from 'express';
import User from '../../models/user';

const createPost = (req: Request, res: Response) => {
    const { userId, content } = req['body'];
    User.createPost(userId, content)
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
