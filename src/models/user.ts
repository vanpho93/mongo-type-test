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

const UserMongo = model('user', UserSchema);

class User extends UserMongo {
    static signIn(email: String, password: String) :Promise<any> {
        return User.find({ email, password })
        .then(users => {
            if (users.length !== 1) return Promise.reject(new Error('Sai thong tin dang nhap'));
        });
    }
}

export default User;
