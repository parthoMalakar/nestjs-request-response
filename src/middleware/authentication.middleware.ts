import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

import { RequestServices } from "../services/request.servies";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly requestServie : RequestServices) {}
    private readonly logger = new Logger(AuthenticationMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(AuthenticationMiddleware.name);

        // Authenticate the request

        const userId = '123';

        this.requestServie.setUserId(userId);

        next();
    }
}