import { Request, Response } from 'express';
import User from '../../models/user';
import UserInput from '../../models/user-input';

const signIn = (req: Request, res: Response) => {
    const { email, password } = req['body'] as UserInput;
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
