import { Credential } from './../Models/Credential';
import { BaseRepository } from "./BaseRepository";
import { CredentialRepositoryInterface } from "./Interfaces/CredentialRepositoryInterface";
import { injectable } from "inversify";

@injectable()
class CredentialRepository extends BaseRepository implements CredentialRepositoryInterface {
    getModel() { 
        return Credential;  
    }

    async save(data: Credential): Promise<Credential> {
        return await Credential.save(data);
    }

    async create(data: Credential): Promise<Credential> {
        return Credential.create(data);
    }
}

export { CredentialRepository }
