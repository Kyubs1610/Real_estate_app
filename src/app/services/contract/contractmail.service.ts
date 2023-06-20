import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


// const BASEURL = 'http://192.168.1.254:3000/';
const BASEURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})


export class ContractmailService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // generateContract(roomId: number) {
    
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Authorization': this.cookieService.get('authToken')
  //     }),
  //     withCredentials: true
  //   };
  //   return this.http.get(`${BASEURL}v1/contract/lease/room/${roomId}`, options);
  // }

  sendContract(emailAddress: string) {
    const payload = {
      tenantEmail: emailAddress
    };
  
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.cookieService.get('authToken'),
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
  
    return this.http.post(`${BASEURL}v1/contract/lease/email`, payload, options);
  }
  
}
