import { Request, Response } from 'express';
import Comment from '../../models/comment';

interface CommentInfo {
    userId: String;
    content: String;
    postId: String;
}

const createComment = (req: { body: Object }, res: Response) => {
    const { userId, content, postId } = req.body as CommentInfo;
    Comment.createComment(userId, postId, content)
        .then(() => res.status(201).send({ message: 'Create comment successfully' }))
        .catch(err => res.status(500).send({ message: 'Internal server error' }));
}

export default createComment;
