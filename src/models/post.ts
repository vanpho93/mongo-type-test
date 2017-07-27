import { Schema, model } from 'mongoose';
import Comment from './comment';

const PostSchema = new Schema({
    content: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
}, { autoIndex: false });

const PostMongoose = model('post', PostSchema);

class Post extends PostMongoose {
    content: String;
    comment: Comment[];
}

export default Post;
