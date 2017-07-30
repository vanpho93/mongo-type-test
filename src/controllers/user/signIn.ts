import { Request, Response } from 'express';
import User from '../../models/user';

interface SignInInfo {
    email: String;
    password: String;
}

const signIn = (req: { body: { email: String, password: String } }, res: Response) => {
    const { email, password } = req.body as SignInInfo;
    User.signIn(email, password)
    .then(() => {
        res.status(200);
        res.send({ message: 'Sign in successfully' });
    })
    .catch(() => {
        res.status(400);
        res.send({ message: 'Check login info' })
    });
}

export default signIn;
