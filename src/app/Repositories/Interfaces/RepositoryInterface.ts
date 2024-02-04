interface RepositoryInterface {
    getAll(): Promise<any[]>;
    saveUserProfile(data: any): Promise<any>;
};

export type { RepositoryInterface };