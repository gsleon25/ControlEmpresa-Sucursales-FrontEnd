import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public ruta: String;
  public token;
  public identidad;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

  loginEmpresa(empresa, getToken= null): Observable<any>{
    if(getToken != null){
      empresa.getToken = getToken
    }

    let params = JSON.stringify(empresa)
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.ruta + 'loginEmpresa', params, {headers: headersVariable});
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

   agregarEmpresa(empresa: Empresa): Observable<any>{
     let params = JSON.stringify(empresa)
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())


     return this._http.post(this.ruta + 'registrarEmpresa', params, {headers: headersToken})
   }

   editarEmpresa(empresa: Empresa, id: String): Observable<any>{
    let params = JSON.stringify(empresa)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarEmpresa/' + id, params, {headers: headersToken})
   }

   eliminarEmpresa(id: String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarEmpresa/' + id, {headers: headersToken})
   }

   obtenerEmpresaId(id: String): Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


    return this._http.get(this.ruta + 'obtenerEmpresaId/' + id , {headers: headersVariable})
   }

   obtenerEmpresas(): Observable<any>{
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.ruta + 'obtenerEmpresas', {headers: headersVariable})
   }

}

/*
    loginEmpresa,
    agregarEmpresa,
    editarEmpresa,
    eliminarEmpresa,

    obtenerEmpresas
*/

