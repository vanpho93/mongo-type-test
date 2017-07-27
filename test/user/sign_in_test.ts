import * as assert from 'assert';
import 'mocha';
import User from '../../src/models/user';

describe('Sign in test', () => {
    it('User can sign in', async () => {
        const pho = new User({ name: 'Pho', email: 'vanpho01@gmail.com', password: '123' });
        await pho.save();
        await User.signIn('vanpho01@gmail.com', '123');
    });
});
