import 'reflect-metadata';
import { Credential } from './../../../Models/Credential';
import { UserProfile } from './../../../Models/UserProfile';
import { injectable, inject } from 'inversify';
import { Request, Response, request, response } from "express";
import { TYPES } from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import bcrypt from 'bcrypt';
import { CredentialServiceInterface } from '../../../Services/Interfaces/CredentialServiceInterface';

@injectable()
class RegisterController {
    protected userProfileServiceInterface: UserProfileServiceInterface;
    protected credentialServiceInterface: CredentialServiceInterface;

    constructor(
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface,
        @inject(TYPES.CredentialServiceInterface) credentialServiceInterface: CredentialServiceInterface,
    ) {
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.credentialServiceInterface = credentialServiceInterface;
    }

    async index(req: Request, res: Response) {
        const { userProfileData, credentialData } = req.body;
        const userProfile = new UserProfile();
        const credential = new Credential();

        //encode password
        const saltPassword = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(credentialData.password, saltPassword);

        Object.assign(userProfile, userProfileData);
        Object.assign(credential, {...credentialData, password_hash: hashPassword, password_salt: saltPassword});
    
    
        userProfile.credential = credential;

        await this.userProfileServiceInterface.save(userProfile);
        
        res.json({ message: 'User profile and credential saved successfully' });
    }
}

export { RegisterController };

