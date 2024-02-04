import { UserProfile } from "../../Models/UserProfile";

interface UserProfileServiceInterface {
    getAll(): Promise<UserProfile[]>;
    saveUserProfile(data: UserProfile): Promise<void>;
};

export type { UserProfileServiceInterface };