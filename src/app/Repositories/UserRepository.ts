import { User } from "../Models/UserProfile";
import { BaseRepository } from "./BaseRepository";
import { UserRepositoryInterface } from "./Interfaces/UserRepositoryInterface";
import { injectable } from "inversify";

@injectable()
class UserRepository extends BaseRepository implements UserRepositoryInterface {
    constructor() {
        super();
        this.setModel();
    }

    getModel() { 
        return User;  
    }
    
    async getUsers(): Promise<User[]> {
        return await User.find();
    }

}

export { UserRepository }
