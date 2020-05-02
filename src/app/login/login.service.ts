import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  registerUser(data):Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        return this.http.post(environment.API_URL+'register', data);
  }
  auth(data):Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        return this.http.post(environment.API_URL+'login', data);
  }
}