import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { RegisterController } from './RegisterController';
import { Request, Response} from "express";
import { TYPES } from '../../../../config/types';

@injectable()
class ConfirmRoleController {
    protected registerController: RegisterController;

    constructor (
        @inject(TYPES.RegisterController) registerController: RegisterController,
    ) 
    {
        this.registerController =  registerController;
    }

    async index(req: Request, res: Response) {
        return res.status(200).json({ message: 'Products retrieved successfully' });
    }
};

export { ConfirmRoleController };