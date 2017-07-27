import { Schema, model } from 'mongoose';
import Comment from './comment';
import User from './user';

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

    static createPost(userId: String, content: String) {
        const post = new Post({ content });
        return post.save()
        .then(() => User.findByIdAndUpdate(userId, { $push: { posts: post } }))
        .then(() => post._id);
    }
}

export default Post;
