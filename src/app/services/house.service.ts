import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

interface building extends Array<{
  id: number;
  name: string;
  addressStreet: string;
  addressCity: string;
  addressNumber: any;
  addressPostalCode: string;
  addressCountry: string;
  doorCode: string;
  updatedAt: string;
  createdAt: string;
  rooms: any[];
}> {}

interface UpdateBuilding extends Array<{
  building:{  
    id: number;
    name: string;
    addressStreet: string;
    addressCity: string;
    addressNumber: any;
    addressPostalCode: string;
    addressCountry: string;
    doorCode: string;
    updatedAt: string;
    createdAt: string;
    rooms: any[];
   }
}> {}

const BASEURL = 'http://192.168.1.254:3000/';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService ) { }


  getbuilding(): Observable<building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
      // send the info with the cookie
    return this.http.get<building>(`${BASEURL}v1/buildings`, options);
  }

  addbuilding(newbuilding: building): Observable<building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.post<building>(`${BASEURL}v1/buildings/createBuilding`, newbuilding ,  options);
  }

  removebuilding(id: number): Observable<building> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.delete<building>(`${BASEURL}v1/buildings/deleteBuilding/${id}`, options);
  }

  updatebuilding(id: number, updateBuildings: any): Observable<UpdateBuilding> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
      }; // send the info with the cookie
    return this.http.patch<UpdateBuilding>(`${BASEURL}v1/buildings/updateBuildingInfo/${id}`, updateBuildings, options)
   
}
}