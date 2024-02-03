import { User } from "../../Models/User";
import { RepositoryInterface } from "./RepositoryInterface";

interface UserRepositoryInterface extends RepositoryInterface {
    getUsers(): Promise<User[]>;
};

export type { UserRepositoryInterface };