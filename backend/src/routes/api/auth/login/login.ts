import { Router } from "express";
import { LoginController } from "../../../../app/Http/Controllers/Auth/LoginController";
import AppServiceProvider from "../../../../app/Providers/AppServiceProvider";
import passport, { session } from "passport";
import { Authentication } from "../../../../app/Http/Middleware/Authentication";
require('dotenv').config();

class LoginRoutes {
    private loginController: LoginController;
    private authentication: Authentication;
    router = Router();

    constructor() {
        this.loginController = AppServiceProvider.getContainer().resolve(LoginController);
        this.authentication = AppServiceProvider.getContainer().resolve(Authentication);
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/login", passport.authenticate('jwt', { session: false }), this.loginController.index.bind(this.loginController));
        this.router.post("/login", passport.authenticate('local', { session: false }), this.loginController.index.bind(this.loginController));
    }
}

export default new LoginRoutes().router;