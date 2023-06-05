import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponse } from '../models/AuthResponse.model';


const BASEURL = 'http://192.168.1.254:3000/';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}


  getFirstname(): Observable<AuthResponse> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
    console.log(options)
    return this.http.get<AuthResponse>(`${BASEURL}v1/user/userbyid`, options);
  }
}
