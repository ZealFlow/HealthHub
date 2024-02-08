import { Credential } from "../../Models/Credential";
import { RepositoryInterface } from "./RepositoryInterface";

interface CredentialRepositoryInterface extends RepositoryInterface {
    save(data: Credential): Promise<Credential>;
    create(data: Credential): Promise<Credential>;
};

export type { CredentialRepositoryInterface };