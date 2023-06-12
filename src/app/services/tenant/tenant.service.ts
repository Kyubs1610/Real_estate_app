import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Tenant } from 'src/app/models/tenant.model';

// const BASEURL = 'http://192.168.1.254:3000/';

const BASEURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class TenantsService {
tenantID!:  number


  constructor(
    private http: HttpClient,
    private cookieService: CookieService,

      ) { }


getTenant(id:number): Observable<Tenant> {

  const options = {
    headers: new HttpHeaders({
      'Authorization': this.cookieService.get('authToken')
    }),
    withCredentials: true
  };
  return this.http.get<Tenant>(`${BASEURL}v1/tenant/${id}`, options);
}

}