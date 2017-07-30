import * as assert from 'assert';
import User from '../../../src/models/user';
import app from '../../../src/app';
import * as request from 'supertest';
import 'mocha';

describe('Test sign up static function', () => {
    
    it('User can sign up', async() => {
        const response = await request(app)
        .post('/api/user')
        .send({ email: 'pho@gmail.com', password: '123', name: 'Pho Nguyen' });
        assert(response.status === 201);
        const user = await User.findOne({  }) as User;
        assert(user.name === 'Pho Nguyen');
    });

    it('User can not sign in with exist email', async () => {
        const pho = new User({ email: 'pho@gmail.com' });
        await pho.save();
        const response = await request(app)
        .post('/api/user')
        .send({ email: 'pho@gmail.com', password: '123', name: 'Pho Nguyen' });
        assert(response.status === 400);
    });
});
