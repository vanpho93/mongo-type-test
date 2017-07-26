import { Schema, model } from 'mongoose';
import './user';

const CommentSchema = new Schema({
    content: String,
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'user' 
    }
});

//Create class and exports
const Comment = model('comment', CommentSchema);

module.exports = Comment;