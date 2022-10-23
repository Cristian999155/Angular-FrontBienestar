import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { map } from 'rxjs/operators';
import { Serviciobienestar } from 'src/app/serviciobienestar/model/serviciobienestar';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

private urlEndPoint: string = 'http://localhost:8080/api/v1/booking/searchByServiceId';
private urlEndPoint2: string = 'http://localhost:8080/api/v1/booking/allBookingsAngular';
booking: Booking = new Booking();



  constructor(private http: HttpClient) { }

  getReservas(): Observable<Booking[]> {
      //return of(CLIENTES);
      return this.http.get(this.urlEndPoint2).pipe(
        map(response => response as Booking[])
      );
    }


  geReservasId(id: Serviciobienestar): Observable<Booking[]>{
      //  return this.http.get<Serviciobienestar>(`${this.urlEndPoint}/${id}`)
      return this.http.get(`${this.urlEndPoint}/${id}`).pipe(
        map(response => response as Booking[])
      );
      }

}
