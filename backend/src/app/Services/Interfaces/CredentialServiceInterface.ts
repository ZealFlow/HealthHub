import { Credential } from './../../Models/Credential';

interface CredentialServiceInterface {
    save(data: Credential): Promise<Credential>;
    findOne(option: any): Promise<Credential | null>;
};

export type { CredentialServiceInterface };