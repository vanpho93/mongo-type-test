import * as assert from 'assert';
import 'mocha';
import User from '../../src/models/user';

describe('Sign up test', () => {
    it('Static method signUp can add new user', async () => {
        await User.signUp('vanpho01@gmail.com', '123', 'Pho Nguyen');
        const user = await User.findOne() as User;
        assert(user.name === 'Pho Nguyen');
    });

    it('Cannot create user with email that has exist', async () => {
        try {
            await User.signUp('vanpho01@gmail.com', '123', 'Pho Nguyen');
            await User.signUp('vanpho01@gmail.com', '234', 'Nguyen Pho');
        } catch (e) {
            assert(e.code == 11000);
        }
    });

    it('Create user using save() method', async () => {
        const pho = new User({ name: 'Pho', password: '123', email: 'vanpho01@gmail.com' });
        await pho.save();
        const user = await User.findOne();
        assert(user['email'] === pho['email']);
    });

    it('Cannot create user without email', async () => {
        try {
            const pho = new User({ name: 'Pho', password: '123' });
            await pho.save();
            assert(false);
        } catch (err) {
            assert(err.toString() === 'ValidationError: email: Path `email` is required.');
        }
    });
});
