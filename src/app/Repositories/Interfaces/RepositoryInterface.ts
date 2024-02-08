interface RepositoryInterface {
    getAll(): Promise<any[]>;
    save(data: any): Promise<any>;
    create(data: any): Promise<any>;
};

export type { RepositoryInterface };