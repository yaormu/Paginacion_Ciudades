import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/Ejemplo01/personas';

  getPersonas() { //Obtenemos todos los datos de la anterior URL
    return this.http.get<Persona[]>(this.Url);
  }
}
