import { Request, Response } from 'express';
import Comment from '../../models/comment';

interface CommentInput {
    userId: String;
    postId: String;
    content: String;
}

const createComment = (req: Request, res: Response) => {
    const { postId, userId, content } = req['body'] as CommentInput;
    Comment.createComment(userId, postId, content)
    .then(() => {
        res.status(201);
        res.send({ message: 'Create comment successfully' })
    })
    .catch(() => {
        res.status(500);
        res.send({ message: 'Internal server error' });
    });
}

export default createComment;
