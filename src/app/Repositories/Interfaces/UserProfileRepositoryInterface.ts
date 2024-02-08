import { UserProfile } from "../../Models/UserProfile";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserProfileRepositoryInterface extends RepositoryInterface {
    getUsers(): Promise<UserProfile[]>;
    save(data: UserProfile): Promise<any>;
};

export type { UserProfileRepositoryInterface };