import { RepositoryInterface } from "./Interfaces/RepositoryInterface";
import { injectable } from "inversify";

@injectable()
abstract class BaseRepository implements RepositoryInterface { 
    protected model: any;

    abstract getModel(): any;
    
    public setModel() {
        this.model = this.getModel();
    }

    async getAll(): Promise<any[]> {
        return await this.model.find();
    }
};

export { BaseRepository };