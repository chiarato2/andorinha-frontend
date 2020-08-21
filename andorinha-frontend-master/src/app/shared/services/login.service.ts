import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthDto } from '../models/authDto';
import { Observable} from 'rxjs';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public decodedToken;
  constructor(private http: HttpClient) { }


  /* public login(authDto: AuthDto): Observable<AuthDto>{
    return this.http.post<AuthDto>('http://localhost:8080/andorinha-backend/api/auth/login', authDto);
  } */

  public login(authDto: AuthDto) {
    return this.http.post('http://localhost:8080/andorinha-backend/api/auth/login', authDto, {observe: 'response'});
  }

  userInfo() {
    this.decodedToken = jwt(sessionStorage.getItem('token'));
    //sessionStorage.setItem('email-usuario', this.decodedToken.getValue().email);
    //sessionStorage.setItem('uf-usuario', this.decodedToken.getValue().uf);
    sessionStorage.setItem('id', this.decodedToken.getValue().id.toString());
    sessionStorage.setItem('login', this.decodedToken.getValue().id.toString());
    sessionStorage.setItem('senha', this.decodedToken.getValue().id.toString());
    sessionStorage.setItem('nome', this.decodedToken.getValue().id.toString());
    return this.decodedToken.getValue();
  }
}