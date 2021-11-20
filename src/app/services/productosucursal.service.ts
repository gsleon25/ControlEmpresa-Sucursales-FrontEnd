import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Productosucursal } from '../models/productosucursal.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosucursalService {
  public ruta: String;
  public token;
  public identidad;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
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

 agregarProducto(producto: Productosucursal): Observable<any>{
  let params = JSON.stringify(producto)
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.post(this.ruta + 'agregarProductosucursal', params, {headers: headersToken})
 }

 editarProducto(producto: Productosucursal, id: String): Observable<any>{
  let params = JSON.stringify(producto)
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.put(this.ruta + 'editarProductosucursal/' + id, params, {headers: headersToken})
 }

 eliminarProducto(id: String): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.delete(this.ruta + 'eliminarProductosucursal/' + id, {headers: headersToken})
 }

 obtenerProductoId(id: String): Observable<any>{
  let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


  return this._http.get(this.ruta + 'obtenerProductosucursalId/' + id , {headers: headersVariable})
 }

 listarProductos(): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.get(this.ruta + 'listarProductosucursales', {headers: headersToken})
 }

 listarProductosPorEmpresa(): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.get(this.ruta + 'listarProductosucursalesPorEmpresa', {headers: headersToken})
 }

}
