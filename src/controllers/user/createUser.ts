import { Request, Response } from 'express';
import User from '../../models/user';
import UserInput from '../../models/user-input';


const createUser = (req: Request, res: Response) => {
    const { email, password } = req['body'] as UserInput;
    const user = new User({ email, password });
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
