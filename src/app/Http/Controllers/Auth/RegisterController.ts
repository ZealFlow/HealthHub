import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response, request, response } from "express";
import { TYPES }  from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import { Validator } from '../../../Validations/Validator';
import { UserProfile } from '../../../Models/UserProfile';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@injectable()
class RegisterController { 
    protected userProfileServiceInterface: UserProfileServiceInterface;

    constructor(@inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface) {
        this.userProfileServiceInterface = userProfileServiceInterface;
    }

    async index (req: Request, res: Response) {
        const Validations = new Validator(request.body);
        const { error } = Validations.register();

        if (error) return response.status(422).send(error.details[0].message);
        const checkEmailExist = await UserProfile.findOne({ where: { email: req.body.email } });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        return res.send({hashPassword, salt, checkEmailExist});
    }
}

export { RegisterController };

