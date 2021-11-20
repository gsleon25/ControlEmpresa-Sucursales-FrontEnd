import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto.model';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
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

 agregarProducto(producto: Producto): Observable<any>{
  let params = JSON.stringify(producto)
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.post(this.ruta + 'agregarProducto', params, {headers: headersToken})
 }

 editarProducto(producto: Producto, id: String): Observable<any>{
  let params = JSON.stringify(producto)
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.put(this.ruta + 'editarProducto/' + id, params, {headers: headersToken})
 }

 eliminarProducto(id: String): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.delete(this.ruta + 'eliminarProducto/' + id, {headers: headersToken})
 }

 obtenerProductoId(id: String): Observable<any>{
  let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


  return this._http.get(this.ruta + 'obtenerProductoId/' + id , {headers: headersVariable})
 }

 listarProductos(): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.get(this.ruta + 'listarProductos', {headers: headersToken})
 }

 listarProductosPorEmpresa(): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

  return this._http.get(this.ruta + 'listarProductosPorEmpresa', {headers: headersToken})
 }

}
