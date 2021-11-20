import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Sucursal } from '../models/sucursal.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  public ruta: String;
  public token;
  public identidad;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   login(sucursal, getToken= null): Observable<any>{
     if(getToken != null){
       sucursal.getToken = getToken
     }

     let params = JSON.stringify(sucursal)
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

   agregarSucursal(sucursal: Sucursal): Observable<any>{
    let params = JSON.stringify(sucursal)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'registrarSucursal', params, {headers: headersToken})
   }

   editarSucursal(sucursal: Sucursal, id: String): Observable<any>{
    let params = JSON.stringify(sucursal)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarSucursal/' + id, params, {headers: headersToken})
   }

   eliminarSucursal(id: String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarSucursal/' + id, {headers: headersToken})
   }

   obtenerSucursalId(id: String): Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


    return this._http.get(this.ruta + 'obtenerSucursalId/' + id , {headers: headersVariable})
   }

   obtenerSucursales(): Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.ruta + 'obtenerSucursales', {headers: headersVariable})
   }



   obtenerSucursalNombre(nombre: String): Observable<any>{

    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.ruta + 'obtenerSucursalNombre' ,{headers: headersVariable})
   }


   generarPdf(nombre: String): Observable<any>{
    let params = JSON.stringify(nombre)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.get(this.ruta + 'generarPdf', {headers: headersToken})
   }


}


/*
admin,
login,
agregarSucursal,
editarSucursal,
eliminarSucursal,
obtenerSucursalId,
obtenerSucursalNombre,
obtenerSucursal,
generarPdf
*/
