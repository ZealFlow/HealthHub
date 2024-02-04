import { Express } from 'express';
import newUserRoutes from './user/user';
import newExampleRoutes from './example/example';
import newRegisterRoutes from './register/register';

export default function route (app: Express) {
    app.use('/', newExampleRoutes);
    app.use('/user', newUserRoutes);
    app.use('/register', newRegisterRoutes);
}
