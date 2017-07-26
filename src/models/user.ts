import { Schema, model } from 'mongoose';
import './comment';
import './post';

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

const User = model('user', UserSchema);

export default User;
