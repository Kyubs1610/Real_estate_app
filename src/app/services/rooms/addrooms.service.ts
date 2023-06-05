import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../../models/room.model';

const BASEURL = 'http://192.168.1.254:3000';



@Injectable({
  providedIn: 'root'
})
export class AddroomsService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }
// Add rooms to the building with behaviorSubject

roomsSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);

  addRooms(id: string, newRoom: Room) {
    const options = { 
      headers: new HttpHeaders({
        'Authorization': this.cookieService.get('authToken')
      }),
      withCredentials: true };        
      this.http.post<Room>(`${BASEURL}v1/rooms/building/${id}/rooms`, newRoom, options)
      .subscribe((response: Room) => {
        // Add the new room to the BehaviorSubject
        const updatedRooms = this.roomsSubject.getValue().concat(response);
        this.roomsSubject.next(updatedRooms);
      });
}
}