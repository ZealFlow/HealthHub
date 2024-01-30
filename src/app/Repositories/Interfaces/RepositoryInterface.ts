interface RepositoryInterface {
    getAll(): Promise<any[]>;
};

export type { RepositoryInterface };