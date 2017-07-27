import { Request, Response } from 'express';
import User from '../../models/user';

interface NewUserInfo {
    email: String;
    password: String;
    name: String;
}

const createUser = (req: Request, res: Response) => {
    const { email, password, name } = req['body'] as NewUserInfo;
    const user = new User({ email, password, name });
    user.save()
        .then(() => {
            res.status(201);
            res.send({ message: 'Register successfully' });
        })
        .catch((err: Error) => {
            res.status(400);
            res.send({ message: 'Email has exist' })
        });
}

export default createUser;
