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

    async findOne(option: any): Promise<Credential | null> {
        return await this.getModel().findOne({ where: option });
    }
}

export { CredentialRepository }
