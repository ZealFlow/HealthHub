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

    async save(data: any): Promise<any> {
        return await this.model.save(data);
    } 

    async create(data: any): Promise<any> {
        return await this.model.create();
    }

    async findOne(option: any): Promise<any> {
        return await this.model.findOne({ where: { option } })!;
    }
};

export { BaseRepository };