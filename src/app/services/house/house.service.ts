import { UpdateBuilding } from '../../models/updatebuilding.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Building} from '../../models/building.model';
import { addBuilding } from 'src/app/models/addBuilding.model';
import { user } from 'src/app/models/user.model';

// const BASEURL = 'http://192.168.1.254:3000/';

const BASEURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService ) { }

  getbuilding(): Observable<Building[]> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
      // send the info with the cookie
    return this.http.get<Building[]>(`${BASEURL}v1/building`, options);
  }

  getbuildingById(id: number): Observable<Building> {
    const options = {
      headers: new HttpHeaders({
        "Authorization": this.cookieService.get('authToken')
      }),
      withCredentials: true
      }; // send the info with the cookie
    return this.http.get<Building>(`${BASEURL}v1/building/${id}`, options);
  }

  addbuilding(newbuilding: addBuilding): Observable<addBuilding> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.post<addBuilding>(`${BASEURL}v1/building/newbuilding`, newbuilding ,  options);
  }

  removebuilding(id: number): Observable<Building[]> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     }; // send the info with the cookie
    return this.http.delete<Building[]>(`${BASEURL}v1/building/${id}`, options);
  }

  updatebuilding(id: number, updateBuildings: any): Observable<UpdateBuilding[]> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
      }; // send the info with the cookie
    return this.http.patch<UpdateBuilding[]>(`${BASEURL}v1/building/${id}`, updateBuildings, options)
   
}

getUsers(): Observable<user[]> {
  console.log('kikou')
  const options = {
    headers: new HttpHeaders({
      "Authorization": this.cookieService.get('authToken')
    }),
    withCredentials: true
    }; // send the info with the cookie
  return this.http.get<user[]>(`${BASEURL}v1/user`, options);

}
}