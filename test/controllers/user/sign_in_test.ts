import * as assert from 'assert';
import User from '../../../src/models/user';
import app from '../../../src/index';
import * as request from 'supertest';
import 'mocha';

describe('Test sign in static function', () => {

    beforeEach(async () => {
        // Create a new person
        const pho = new User({ email: 'pho@gmail.com', password: '123' });
        await pho.save();
    });

    it('User cannot sign in with wrong info', async() => {
        const response = await request(app)
        .post('/api/user/signin')
        .send({ email: 'pho@gmail', password: '123' });
        assert(response.status === 400);
    });

    it('User can sign in with right info', async () => {
        const user = await User.findOne() as User;
        const { email, password } = user;
        const response = await request(app)
        .post('/api/user/signin')
        .send({ email, password })
        assert(response.status === 200);
    });
    
});
