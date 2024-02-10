import { Express } from 'express';
import newUserRoutes from './user/user';
import newRegisterRoutes from './api/auth/register/register';
import newLoginRoutes from './api/auth/login/login';

export default function route (app: Express) {
    app.use('/user', newUserRoutes);
    app.use('/auth', newRegisterRoutes);
    app.use('/auth', newLoginRoutes);
}
