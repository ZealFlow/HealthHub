import { User } from "../../Models/User";

interface UserServiceInterface {
    getAll(): Promise<User[]>;
};

export type { UserServiceInterface };