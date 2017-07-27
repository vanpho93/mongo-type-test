import * as assert from 'assert';
import User from '../../src/models/user';
import { createUsers } from '../../src/playground/createDb';
import 'mocha';


describe.only('Create database', () => {
    it('Create 10 users', async () => {
        await createUsers(10);
        const count = await User.count({ });
        assert(count === 10);
    });
});
