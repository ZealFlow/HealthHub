import { Router } from "express";
import AppServiceProvider from "../../../../app/Providers/AppServiceProvider";
import { ConfirmRoleController } from "../../../../app/Http/Controllers/Auth/ConfirmRoleController";
import passport from "passport";
import { Authentication } from "../../../../app/Http/Middleware/Authentication";
require('dotenv').config();

class VerifyRoleRoutes {
    private confirmRoleController: ConfirmRoleController;
    private authentication: Authentication;
    router = Router();

    constructor() {
        this.confirmRoleController = AppServiceProvider.getContainer().resolve(ConfirmRoleController);
        this.authentication = AppServiceProvider.getContainer().resolve(Authentication);
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/verifyrole", passport.authenticate('jwt', { session: false }), this.confirmRoleController.index.bind(this.confirmRoleController));
    }
}

export default new VerifyRoleRoutes().router;
