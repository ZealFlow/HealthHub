import { Router } from "express";
import { ExampleController } from "../../app/Http/Controllers/ExampleController";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";

class ExampleRoutes {
    private exampleController: ExampleController;
    router = Router();

    constructor() {
        this.exampleController = AppServiceProvider.getContainer().resolve(ExampleController);
        this.intializeRoutes();
    }

    intializeRoutes() { 
        this.router.get("/", this.exampleController.index.bind(this.exampleController));
    }
}

export default new ExampleRoutes().router;