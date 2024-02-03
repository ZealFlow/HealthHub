import { User } from "../../Models/UserProfile";

interface UserServiceInterface {
    getAll(): Promise<User[]>;
};

export type { UserServiceInterface };