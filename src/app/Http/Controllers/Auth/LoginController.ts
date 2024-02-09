import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response} from "express";
import { TYPES } from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';

@injectable()
class LoginController {
    protected userProfileServiceInterface: UserProfileServiceInterface;

    constructor (
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface
    ) 
    {
        this.userProfileServiceInterface = userProfileServiceInterface;
    }

    async index(req: Request, res: Response) {
        res.send('User login Successfully!');
    }
}

export { LoginController };

