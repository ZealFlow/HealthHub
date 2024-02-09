import { Express } from 'express';
import newUserRoutes from './user/user';
import newRegisterRoutes from './register/register';
import newLoginRoutes from './login/login';

export default function route (app: Express) {
    app.use('/user', newUserRoutes);
    app.use('/register', newRegisterRoutes);
    app.use('/login', newLoginRoutes);
}
