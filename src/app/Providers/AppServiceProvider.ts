import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../config/types";
import { UserService } from "../Services/UserService";
import { UserRepository } from "../Repositories/UserRepository";
import { UserRepositoryInterface } from "../Repositories/Interfaces/UserRepositoryInterface";
import { UserServiceInterface } from "../Services/Interfaces/UserServiceInterface";

class AppServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register() {
        this.container.bind<UserServiceInterface>(TYPES.UserServiceInterface).to(UserService);
        this.container.bind<UserRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserRepository);
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
