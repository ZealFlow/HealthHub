import { UserProfile } from "../../Models/UserProfile";

interface UserProfileServiceInterface {
    getAll(): Promise<UserProfile[]>;
    save(data: UserProfile): Promise<UserProfile>;
};

export type { UserProfileServiceInterface };