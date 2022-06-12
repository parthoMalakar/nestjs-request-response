import { Injectable, Scope } from "@nestjs/common";

@Injectable({scope : Scope.REQUEST})
export class RequestServices {
    private userId : string;

    setUserId(userId : string) {        
        this.userId = userId;
    }

    getUserId() {
        return this.userId;
    }

}