import { Credential } from './../../Models/Credential';

interface CredentialServiceInterface {
    save(data: Credential): Promise<Credential>;
    create(data: Credential): Promise<Credential>;
};

export type { CredentialServiceInterface };