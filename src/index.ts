import * as express from 'express';
import './startDatabase';

import app from './app';

app.listen(3000, () => console.log('Server started'));
