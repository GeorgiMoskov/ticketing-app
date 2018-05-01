import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtHelperService) {}

    public isAuth(): boolean {
        const token = this.jwtService.tokenGetter();

        if( token && !this.jwtService.isTokenExpired(token)) {
            return true;
        }

        return false;
    }
}