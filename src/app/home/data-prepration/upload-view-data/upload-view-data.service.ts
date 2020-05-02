import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class UploadViewDataService {
  constructor(private http: HttpClient) { }
  uploadFile(file):Observable<any> {
      let formData:FormData = new FormData();
        formData.append('file', file, file.name);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'multipart/form-data'
          })
        };
        return this.http.post(environment.API_URL+'upload', formData);
  }
}