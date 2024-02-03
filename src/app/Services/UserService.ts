import "reflect-metadata";
import { inject, injectable } from "inversify";
import { User } from "../Models/UserProfile";
import { UserRepositoryInterface } from "../Repositories/Interfaces/UserRepositoryInterface";
import { UserServiceInterface } from "./Interfaces/UserServiceInterface";
import { TYPES } from "../../config/types";

@injectable()
class UserService implements UserServiceInterface {
    protected userRepositoryInterface: UserRepositoryInterface;

    constructor (@inject(TYPES.UserRepositoryInterface) userRepositoryInterface: UserRepositoryInterface) {
        this.userRepositoryInterface = userRepositoryInterface;
    }
    
    getAll(): Promise<User[]> {
        return this.userRepositoryInterface.getAll();
    }
};

export { UserService };
