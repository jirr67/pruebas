import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlUsuarios= "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  public listadoUsuarios(): Observable<any>{
    return this.http.get(this.urlUsuarios);
  }

}
