import "reflect-metadata";
import { UserCredential } from '../Models/UserCredential';
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
import { UserEntitiesRepositoryInterface } from "../Repositories/Interfaces/UserEntitiesRepositoryInterface";
import { UserEntitiesRepository } from "../Repositories/UserEntitiesRepository";
import { UserEntitiesServiceInterface } from "../Services/Interfaces/UserEntitiesServiceInterface";
import { UserEntitiesService } from "../Services/UserEntitiesService";
import { UserEntities } from "../Models/UserEntities";
import { RegisterController } from "../Http/Controllers/Auth/RegisterController";
import { EntitiesRoleServiceInterface } from "../Services/Interfaces/EntitiesRoleServiceInterface";
import { EntitiesRoleService } from "../Services/EntitiesRoleService";
import { EntitiesRoleRepositoryInterface } from "../Repositories/Interfaces/EntitiesRoleRepositoryInterface";
import { EntitiesRoleRepository } from "../Repositories/EntitiesRoleRepository";
import { EntitiesRole } from "../Models/EntitiesRole";
import { RoleService } from "../Services/RoleService";
import { RoleServiceInterface } from "../Services/Interfaces/RoleServiceInterface";
import { RoleRepositoryInterface } from "../Repositories/Interfaces/RoleRepositoryInterface";
import { RoleRepository } from "../Repositories/RoleRepository";
import { Role } from "../Models/Role";

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


        this.container.bind<UserEntitiesServiceInterface>(TYPES.UserEntitiesServiceInterface).to(UserEntitiesService);
        this.container.bind<UserEntitiesRepositoryInterface>(TYPES.UserEntitiesRepositoryInterface).to(UserEntitiesRepository);

        this.container.bind<EntitiesRoleServiceInterface>(TYPES.EntitiesRoleServiceInterface).to(EntitiesRoleService);
        this.container.bind<EntitiesRoleRepositoryInterface>(TYPES.EntitiesRoleRepositoryInterface).to(EntitiesRoleRepository);

        this.container.bind<RoleServiceInterface>(TYPES.RoleServiceInterface).to(RoleService);
        this.container.bind<RoleRepositoryInterface>(TYPES.RoleRepositoryInterface).to(RoleRepository);

        this.container.bind(TYPES.UserProfile).toConstantValue(new UserProfile());
        this.container.bind(TYPES.Credential).toConstantValue(new UserCredential());
        this.container.bind(TYPES.UserEntities).toConstantValue(new UserEntities());
        this.container.bind(TYPES.EntitiesRole).toConstantValue(new EntitiesRole());
        this.container.bind(TYPES.Role).toConstantValue(new Role());

        this.container.bind<RegisterController>(TYPES.RegisterController).to(RegisterController);
    }

    public getContainer(): Container {
        return this.container;
    }
}

export default new AppServiceProvider;
