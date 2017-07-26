import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    content: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const Post = model('post', PostSchema);

export default Post;
