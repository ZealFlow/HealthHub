import { UserProfile } from './../../../Models/UserProfile';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response, request, response } from "express";
import { TYPES }  from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import { Validator } from '../../../Validations/Validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

@injectable()
class RegisterController { 
    protected userProfileServiceInterface: UserProfileServiceInterface;
    protected userProfile: UserProfile;

    constructor(@inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
    @inject(TYPES.UserProfile) userProfile: UserProfile) {
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.userProfile = userProfile;
    }

    async index (req: Request, res: Response) {
        // const validations = new Validator(req.body);
        // const { error } = validations.register();
        // if (error) return response.status(422).send(error.details[0].message);
        const checkEmailExist = await UserProfile.findOne({ where: { email: req.body.email } });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        this.userProfile.firstname = req.body.firstname;
        this.userProfile.lastname = req.body.lastname;
        this.userProfile.email = req.body.email;
        this.userProfile.username = req.body.username;

        this.userProfileServiceInterface.saveUserProfile(this.userProfile);

        return res.send({hashPassword, salt, checkEmailExist});
    }
}

export { RegisterController };

