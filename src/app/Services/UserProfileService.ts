import "reflect-metadata";
import { inject, injectable } from "inversify";
import { UserProfile } from "../Models/UserProfile";
import { UserProfileRepositoryInterface } from "../Repositories/Interfaces/UserProfileRepositoryInterface";
import { UserProfileServiceInterface } from "./Interfaces/UserProfileServiceInterface";
import { TYPES } from "../../config/types";

@injectable()
class UserProfileService implements UserProfileServiceInterface {
    protected userProfileRepositoryInterface: UserProfileRepositoryInterface;

    constructor (@inject(TYPES.UserRepositoryInterface) userProfileRepositoryInterface: UserProfileRepositoryInterface) {
        this.userProfileRepositoryInterface = userProfileRepositoryInterface;
    }

    saveUserProfile(data: UserProfile): Promise<void> {
        return this.userProfileRepositoryInterface.saveUserProfile(data)
    }
    
    getAll(): Promise<UserProfile[]> {
        return this.userProfileRepositoryInterface.getAll();
    }
};

export { UserProfileService };
