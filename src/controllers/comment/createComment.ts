import { Request, Response } from 'express';
import Comment from '../../models/comment';

interface CommentInput {
    postId: String;
    userId: String;
    content: String;
}

class BodyParserRequest extends Request {
    body: CommentInput;
}

const createComment = (req: BodyParserRequest, res: Response) => {
    const { postId, userId, content } = req.body;
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
