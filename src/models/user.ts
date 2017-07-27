import { Schema, model } from 'mongoose';
import Post from './post';

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
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
}, { autoIndex: false });

const UserMongoose = model('user', UserSchema);

class User extends UserMongoose {
    posts: Post[];
    email: String;
    name: String;
    friends: User[];
    password: String;

    static signIn(email: String, password: String) :Promise<any> {
        return User.find({ email, password })
        .then(users => {
            if (users.length !== 1) return Promise.reject(new Error('Sai thong tin dang nhap'));
        });
    }

    static signUp(email: String, password: String, name: String) {
        const user = new User({ email, password, name });
        return user.save();
    }
}

export default User;
