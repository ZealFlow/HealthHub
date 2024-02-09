import { Credential } from "../../Models/Credential";
import { RepositoryInterface } from "./RepositoryInterface";

interface CredentialRepositoryInterface extends RepositoryInterface {
    save(data: Credential): Promise<Credential>;
    findOne(option: any): Promise<Credential | null>;
};

export type { CredentialRepositoryInterface };