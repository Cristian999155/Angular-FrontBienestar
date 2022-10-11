import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

private urlEndPoint: string = 'http://localhost:8080/api/v1/person';
  private urlEndPoint2: string = 'http://localhost:8080/api/v1/person/getAll';
persona : Persona = new Persona();

 constructor(private http: HttpClient) { }


 getPersonas(): Observable<Persona[]> {
     //return of(CLIENTES);
     return this.http.get(this.urlEndPoint2).pipe(
       map(response => response as Persona[])
     );
   }

 create(persona: Persona) : Observable<Persona> {

   return this.http.post<Persona>(this.urlEndPoint, persona)

      


 }

 delete(id: number): Observable<Persona> {

 return this.http.delete<Persona>(`${this.urlEndPoint}/${id}`)
 }
}
