import 'reflect-metadata';
import { Credential } from './../../../Models/Credential';
import { UserProfile } from './../../../Models/UserProfile';
import { injectable, inject } from 'inversify';
import { Request, Response, request, response } from "express";
import { TYPES } from "../../../../config/types";
import { UserProfileServiceInterface } from '../../../Services/Interfaces/UserProfileServiceInterface';
import bcrypt from 'bcrypt';
import { CredentialServiceInterface } from '../../../Services/Interfaces/CredentialServiceInterface';
import jwt from 'jsonwebtoken';
// import fs from 'fs';

// const privateKey = fs.readFileSync('/keys/private.key');
const encodedToken = (user_id: number) => {
    return jwt.sign({
        iss: 'HealthHub',
        sub: user_id,
        ist: Math.floor(Date.now()),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 3)
    }, process.env.JWT_SECRET as string);
}

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

        //hash password
        const saltPassword = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(credentialData.password, saltPassword);

        Object.assign(userProfile, userProfileData);
        Object.assign(credential, { ...credentialData, password_hash: hashPassword, password_salt: saltPassword });


        userProfile.credential = credential;

        await this.userProfileServiceInterface.save(userProfile);

        //get token
        res.setHeader('Authorization', encodedToken(userProfile.user_id));

        res.json({ message: 'User profile and credential saved successfully'});
    }
}

export { RegisterController };

