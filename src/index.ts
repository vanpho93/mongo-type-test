import * as express from 'express';
import * as reload from 'reload';
import './startDatabase';

import app from './app';

const server = app.listen(3000, () => console.log('Server started'));
reload(server, app);
