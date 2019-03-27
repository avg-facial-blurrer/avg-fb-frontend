import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginResponse} from './dto/LoginResponse';
import {LoginRequest} from './dto/LoginRequest';
import {LogoutResponse} from './dto/LogoutResponse';
import {VerifiedTokenResponse} from './dto/VerifiedTokenResponse';
import {Subject} from 'rxjs';
import { TokenRequest } from './dto/TokenRequest';

@Injectable()
export class LoginService {
  // actual urlbase
  // const url = 'http://ec2-54-173-110-22.compute-1.amazonaws.com:8080/blackpool-backend/cms/login';
  private readonly URL_BASE: string = 'http://localhost:8080/cms';
  private readonly HEADERS: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private tokenReceived = new Subject<string>();
  public tokenReceived$ = this.tokenReceived.asObservable();

  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string): void {
    const loginRequest = new LoginRequest(username, password);
    this.httpClient.post<LoginResponse>(this.URL_BASE + '/login', loginRequest, {headers: this.HEADERS}).subscribe(data => {
      if (data.token != null && data.token !== '') {
        localStorage.setItem('token', data.token);
        this.tokenReceived.next(data.token);
      }
    }, error => {});
  }

  public verifyToken(token: string): boolean {
    const tokenRequest = new TokenRequest(token);
    this.httpClient.post<VerifiedTokenResponse>(this.URL_BASE + '/verifyToken', tokenRequest, {headers: this.HEADERS}).subscribe(data => {
      if (data != null) {
        if (data.verified) {
          this.updateToken(token);
          return true;
        }
      }
    }, (error) => {});
    return false;
  }

  public logout(token: string): void {
    console.log('called');
    const tokenRequest = new TokenRequest(token);
    this.httpClient.post<LogoutResponse>(this.URL_BASE + '/logout', tokenRequest, {headers: this.HEADERS}).subscribe(() => {
      console.log('works');
      this.updateToken('');
    }, (error) => {});
  }

  private updateToken(token: string): void {
    this.tokenReceived.next(token);
    if (token === '' || token == null) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', token);
    }
  }
}
