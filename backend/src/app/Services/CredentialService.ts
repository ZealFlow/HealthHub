import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Credential } from "../Models/Credential";
import { TYPES } from "../../config/types";
import { CredentialRepositoryInterface } from "../Repositories/Interfaces/CredentialRepositoryInterface";
import { CredentialServiceInterface } from "./Interfaces/CredentialServiceInterface";

@injectable()
class CredentialService implements CredentialServiceInterface {
    protected credentialRepositoryInterface: CredentialRepositoryInterface;

    constructor (@inject(TYPES.UserRepositoryInterface) credentialRepositoryInterface: CredentialRepositoryInterface) {
        this.credentialRepositoryInterface = credentialRepositoryInterface;
    }

    save(data: Credential): Promise<Credential> {
        return this.credentialRepositoryInterface.save(data)
    }

    create(data: Credential): Promise<Credential> {
        return this.credentialRepositoryInterface.create(data);
    }
};

export { CredentialService };
