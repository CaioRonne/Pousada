import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

private apiServer = environment.apiServer

  constructor(private http: HttpClient) { }

 listar() {
      return this.http.get(this.apiServer + 'reserva').toPromise()
 }
  
}
