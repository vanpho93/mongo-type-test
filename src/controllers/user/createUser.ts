import { Request, Response } from 'express';
import User from '../../models/user';

interface NewUserInfo {
    email: String;
    password: String;
    name: String;
}

const createUser = (req: { body: Object }, res: Response) => {
    const { email, password, name } = req.body as NewUserInfo;
    User.signUp(email, password, name)
    .then(() => res.status(201).send({ message: 'Sign up successfully.' }))
    .catch(() => res.status(400).send({ message: 'Please choose another email.' }));
}

export default createUser;
