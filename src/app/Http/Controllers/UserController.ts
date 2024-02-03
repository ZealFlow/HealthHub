import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { TYPES }  from "../../../config/types";
import { UserServiceInterface } from '../../Services/Interfaces/UserServiceInterface';

@injectable()
class UserController { 
    protected userServiceInterface: UserServiceInterface; 

    constructor(@inject(TYPES.UserServiceInterface) userServiceInterface: UserServiceInterface) {
        this.userServiceInterface = userServiceInterface;
    }

    async index (req: Request, res: Response) {
        return res.json(await this.userServiceInterface.getAll());
    }
}

export { UserController };