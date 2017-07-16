import { Schema, model, connect, connection } from 'mongoose';

const UserSchema = new Schema({
    name: String
});

const User = model('user', UserSchema);

