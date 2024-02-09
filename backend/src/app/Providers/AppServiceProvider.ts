import { Credential } from './../Models/Credential';
import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../config/types";
import { UserProfileService } from "../Services/UserProfileService";
import { UserProfileRepository } from "../Repositories/UserProfileRepository";
import { UserProfileRepositoryInterface } from "../Repositories/Interfaces/UserProfileRepositoryInterface";
import { UserProfileServiceInterface } from "../Services/Interfaces/UserProfileServiceInterface";
import { UserProfile } from "../Models/UserProfile";
import { CredentialRepositoryInterface } from '../Repositories/Interfaces/CredentialRepositoryInterface';
import { CredentialRepository } from '../Repositories/CredentialRepository';
import { CredentialService } from '../Services/CredentialService';
import { CredentialServiceInterface } from '../Services/Interfaces/CredentialServiceInterface';

class AppServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register() {
        this.container.bind<UserProfileServiceInterface>(TYPES.UserServiceInterface).to(UserProfileService);
        this.container.bind<UserProfileRepositoryInterface>(TYPES.UserRepositoryInterface).to(UserProfileRepository);
        
        this.container.bind<CredentialServiceInterface>(TYPES.CredentialServiceInterface).to(CredentialService);
        this.container.bind<CredentialRepositoryInterface>(TYPES.CredentialRepositoryInterface).to(CredentialRepository);

        this.container.bind(TYPES.UserProfile).toConstantValue(new UserProfile());
        this.container.bind(TYPES.Credential).toConstantValue(new Credential());
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
