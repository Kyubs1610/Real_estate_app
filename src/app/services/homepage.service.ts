import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface AuthResponse {
  [index: number]: 
  {
  fullname: string;
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  isPasswordRequired: boolean;
  createdAt: string;
  updatedAt: string;
}}


const BASEURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  getFirstname(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${BASEURL}v1/Users/getUsers`);
  }
}
