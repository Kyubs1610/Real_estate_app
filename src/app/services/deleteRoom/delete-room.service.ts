import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Room } from 'src/app/models/room.model';

  // const BASEURL = 'http://192.168.1.254:3000/';
  const BASEURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})

export class DeleteRoomService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

 removeRoom(id: number): Observable<Room> {
    const options = {
      headers: new HttpHeaders({
       'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true
     };
    console.log(options)
    return this.http.delete<Room>(`${BASEURL}v1/room/${id}`, options);
  }
}

