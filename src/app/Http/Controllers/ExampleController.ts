import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";

@injectable()
class ExampleController { 
    async index (req: Request, res: Response) {
        return res.send('Hello world !');
    }
}

export { ExampleController };