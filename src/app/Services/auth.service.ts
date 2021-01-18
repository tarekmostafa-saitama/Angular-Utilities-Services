import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

export const TOKEN_NAME = 'token name';

@Injectable()
export class AuthService {
  constructor(private tokenHelper: JwtHelperService) {}

  getToken(): string {
    const token = localStorage.getItem(TOKEN_NAME);
    if (token == null) { return ''; }
    return token;
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const date = this.tokenHelper.getTokenExpirationDate(token);
    if (date == null) { return new Date(1); }
    return date;
  }

  isTokenExpired(token?: string): boolean {
    return this.tokenHelper.isTokenExpired(token);
  }
}
