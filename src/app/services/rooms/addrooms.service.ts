import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../../models/room.model';
import { tap } from 'rxjs/operators';
import { Building } from 'src/app/models/building.model';

// const BASEURL = 'http://192.168.1.254:3000/';
const BASEURL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class AddroomsService {

buildings!: Building[];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,

      ) { }
// Add rooms to the building with behaviorSubject


roomsSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);



addRooms( buildingId: any, newRoom: Room): Observable<Room> {
  const options = { 
    headers: new HttpHeaders({
      'Authorization': this.cookieService.get('authToken')
    }),
    withCredentials: true };

    const endpoint = `${BASEURL}v1/room/building/${buildingId}/newroom`;
  
  return this.http.post<Room>(endpoint, newRoom, options)
    .pipe(
      tap((response: Room) => {
        // Add the new room to the BehaviorSubject
        const updatedRooms = this.roomsSubject.getValue().concat(response);
        this.roomsSubject.next(updatedRooms);
    
      })
    );
}

}