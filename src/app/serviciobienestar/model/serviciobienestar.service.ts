 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serviciobienestar } from './serviciobienestar';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiciobienestarService {
  private urlEndPoint: string = 'http://localhost:8080/api/v1/offeredService/create';
  private ulrEndPoint2: string = 'http://localhost:8080/api/v1/offeredService/getAll';
  private ulrEndPoint3: string = 'http://localhost:8080/api/v1/offeredService/searchOfferedServiceById';
  private ulrEndPoint4: string = 'http://localhost:8080/api/v1/offeredService/deleteOfferedServiceById';

  constructor(private http: HttpClient) { }


  getServicios(): Observable<Serviciobienestar[]> {

      return this.http.get(this.ulrEndPoint2).pipe(
        map(response => response as Serviciobienestar[])

      );
    }

    create(serviciobienestar: Serviciobienestar) : Observable<Serviciobienestar> {
      return this.http.post<Serviciobienestar>(this.urlEndPoint, serviciobienestar)
    }

    geServicioId(id: Serviciobienestar): Observable<Serviciobienestar>{
        return this.http.get<Serviciobienestar>(`${this.ulrEndPoint3}/${id}`)
      }



      delete(id: number): Observable<Serviciobienestar> {

      return this.http.delete<Serviciobienestar>(`${this.ulrEndPoint4}/${id}`)
      }


}
