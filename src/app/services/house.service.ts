import { UpdateBuilding } from './../models/updatebuilding.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Building} from '../models/building.model';

const BASEURL = 'http://192.168.1.254:3000/';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService ) { }


  getbuilding(): Observable<Building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
      // send the info with the cookie
    return this.http.get<Building>(`${BASEURL}v1/building`, options);
  }

  addbuilding(newbuilding: Building): Observable<Building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.post<Building>(`${BASEURL}v1/building/building`, newbuilding ,  options);
  }

  removebuilding(id: number): Observable<Building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.delete<Building>(`${BASEURL}v1/building/${id}`, options);
  }

  updatebuilding(id: number, updateBuildings: any): Observable<UpdateBuilding> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
      }; // send the info with the cookie
    return this.http.patch<UpdateBuilding>(`${BASEURL}v1/building/${id}`, updateBuildings, options)
   
}
}