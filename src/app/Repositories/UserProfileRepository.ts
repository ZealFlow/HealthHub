import { UserProfile } from "../Models/UserProfile";
import { BaseRepository } from "./BaseRepository";
import { UserProfileRepositoryInterface } from "./Interfaces/UserProfileRepositoryInterface";
import { injectable } from "inversify";

@injectable()
class UserProfileRepository extends BaseRepository implements UserProfileRepositoryInterface {
    
    getModel() { 
        return UserProfile;  
    }
    
    async getUsers(): Promise<UserProfile[]> {
        return await UserProfile.find();
    }
    
    async saveUserProfile(data: UserProfile): Promise<void> {
        UserProfile.save(data);
    }
}

export { UserProfileRepository }
