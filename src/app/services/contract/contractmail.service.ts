import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})



export class ContractmailService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}


}
