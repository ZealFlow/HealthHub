import { Router } from "express";
import { UserController } from "../../app/Http/Controllers/UserController";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";

class UserRoutes {
    private userController: UserController;
    router = Router();

    constructor() {
        this.userController = AppServiceProvider.getContainer().resolve(UserController);
        this.intializeRoutes();
    }

    intializeRoutes() { 
        this.router.get("/", this.userController.index.bind(this.userController));
    }
}

export default new UserRoutes().router;