import { Router } from "express";
import { LoginController } from "../../app/Http/Controllers/Auth/LoginController";
import AppServiceProvider from "../../app/Providers/AppServiceProvider";
import passport, { session } from "passport";

class LoginRoutes {
    private loginController: LoginController;
    router = Router();

    constructor() {
        this.loginController = AppServiceProvider.getContainer().resolve(LoginController);
        this.intializeRoutes();
    }

    intializeRoutes() { 
        this.router.get("/", passport.authenticate('jwt', {session: false}),this.loginController.index.bind(this.loginController));
    }
}

export default new LoginRoutes().router;