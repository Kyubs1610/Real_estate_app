import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/newtenant.model';
import { Tenants } from 'src/app/models/tenant.model';
import { Tenant } from 'src/app/models/newtenant.model';


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

      getTenant(id: number): Observable<Tenants> {
        const options = {
          headers: new HttpHeaders({
            'Authorization': this.cookieService.get('authToken')
          }),
          withCredentials: true
        };
        return this.http.get<Tenants>(`${BASEURL}v1/tenant/${id}`, options);
      }
    
      addTenant(roomId: number, newTenant: Tenant): Observable<Tenant> {
        const options = {
          headers: new HttpHeaders({
            'Authorization': this.cookieService.get('authToken')
          }),
          withCredentials: true
        };
        return this.http.post<Tenant>(`${BASEURL}v1/tenant/newtenant/room/${roomId}`, newTenant, options);
      }

      getRooms(buildingId: any): Observable<Room[]> {
        const options = { 
          headers: new HttpHeaders({
            'Authorization': this.cookieService.get('authToken')
          }),
          withCredentials: true };
          const endpoint = `${BASEURL}v1/room/building/${buildingId}/room`;
        
        return this.http.get<Room[]>(endpoint, options)

       }
    }