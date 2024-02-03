import { User } from "../../Models/UserProfile";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserRepositoryInterface extends RepositoryInterface {
    getUsers(): Promise<User[]>;
};

export type { UserRepositoryInterface };