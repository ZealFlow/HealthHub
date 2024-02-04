import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../config/types";
import { UserProfileService } from "../Services/UserProfileService";
import { UserProfileRepository } from "../Repositories/UserProfileRepository";
import { UserProfileRepositoryInterface } from "../Repositories/Interfaces/UserProfileRepositoryInterface";
import { UserProfileServiceInterface } from "../Services/Interfaces/UserProfileServiceInterface";

class AppServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register() {
        this.container.bind<UserProfileServiceInterface>(TYPES.UserServiceInterface).to(UserProfileService);
        this.container.bind<UserProfileRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserProfileRepository);
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
