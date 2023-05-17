import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  message: string;
  info: {
    fullname: string;
  };
  reset: boolean;
}

const BASEURL = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  getFullname(): Observable<AuthResponse> {
    
    return this.http.get<AuthResponse>(`${BASEURL}v1/auth/login`);
  }
}
