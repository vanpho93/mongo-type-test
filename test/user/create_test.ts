import * as assert from 'assert';
import 'mocha';
import User from '../../src/models/user';

describe('Create new user test', () => {
    it('Static method signUp can add new user', async () => {
        await User.signUp('vanpho01@gmail.com', '123', 'Pho Nguyen');
        const user = await User.findOne({}) as User;
        assert(user.name === 'Pho Nguyen');
    });
});
