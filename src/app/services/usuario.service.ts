import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  public token;
  public identidad;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   login(usuario, getToken= null): Observable<any>{
     if(getToken != null){
       usuario.getToken = getToken
     }

     let params = JSON.stringify(usuario)
     let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

     return this._http.post(this.ruta + 'login', params, {headers: headersVariable});
   }

   obtenerIdentidad(){
      var identidad2 = JSON.parse(localStorage.getItem('identidad'));
      if(identidad2 != 'undefined'){
        this.identidad = identidad2;
      }else{
        this.identidad = null;
      }
      return this.identidad;
   }

   obtenerToken(){
      var token2 = localStorage.getItem('token');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
   }

   agregarEmpleado(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'registrarEmpleado', params, {headers: headersToken})
   }

   editarEmpleado(usuario: Usuario, id: String): Observable<any>{
    let params = JSON.stringify(usuario)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarEmpleado/' + id, params, {headers: headersToken})
   }

   eliminarEmpleado(id: String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarEmpleado/' + id, {headers: headersToken})
   }

   obtenerEmpleadoId(id: String): Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


    return this._http.get(this.ruta + 'obtenerEmpleadoId/' + id , {headers: headersVariable})
   }

   obtenerEmpleadosPorEmpresa(): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.get(this.ruta + 'obtenerEmpleadosPorEmpresa', {headers: headersToken})
   }


   generarPdf(nombre: String): Observable<any>{
    let params = JSON.stringify(nombre)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.get(this.ruta + 'registrarEmpleado', {headers: headersToken})
   }


}


/*
admin,
login,
agregarEmpleado,
editarEmpleado,
eliminarEmpleado,
cantidadEmpleado,
obtenerEmpleadoId,
obtenerEmpleadoNombre,
obtenerEmpleadoPuesto,
obtenerEmpleadoDepartamento,
obtenerEmpleado,
generarPdf
*/
