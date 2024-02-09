import { error } from 'console';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserProfileServiceInterface } from '../../Services/Interfaces/UserProfileServiceInterface';
import { TYPES } from '../../../config/types';
import { inject } from 'inversify';

export class Authentication {
    protected userProfileServiceInterface: UserProfileServiceInterface;

    constructor (
        @inject(TYPES.UserServiceInterface) userProfileServiceInterface: UserProfileServiceInterface
    ) 
    {
        this.userProfileServiceInterface = userProfileServiceInterface;
        this.initialize();
    }

    initialize() {
        passport.use(new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET as string,
        }, async (payload, done) => {
            try {
                const UserEntities = await this.userProfileServiceInterface.findOne({payload});
                done(null, UserEntities);
                console.log('payload', payload);
            } catch (error) {
                done(error, false);
            }
        }));
    }
}