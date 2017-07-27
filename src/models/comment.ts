import { Schema, model } from 'mongoose';
import User from './user';
import Post from './post';

const CommentSchema = new Schema({
    content: String,
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'user' 
    }
}, { autoIndex: false });

//Create class and exports
const CommentMongoose = model('comment', CommentSchema);

class Comment extends CommentMongoose {
    content: String;
    user: User;
    
    static createComment(idUser: String, idPost: String, content: String) {
        const user = new User({ _id: idUser });
        const post = new Post({ _id: idPost });
        const comment = new Comment({ user, content });
        return comment.save()
            .then(() => post.update({ $push: { comments: comment } }));
    }
}

export default Comment;
