import { UserProfile } from "../../Models/UserProfile";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserProfileRepositoryInterface extends RepositoryInterface {
    getUsers(): Promise<UserProfile[]>;
    saveUserProfile(data: UserProfile): Promise<void>;
};

export type { UserProfileRepositoryInterface };