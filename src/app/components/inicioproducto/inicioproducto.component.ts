import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { Sucursal } from 'src/app/models/sucursal.model';
import { ProductoService } from 'src/app/services/producto.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicioproducto',
  templateUrl: './inicioproducto.component.html',
  styleUrls: ['./inicioproducto.component.scss'],
  providers: [ProductoService]
})
export class InicioproductoComponent implements OnInit {
  public productosList;
  public sucursalesList;
  public productoIDModel: Producto;
  public productoActualizado;
  public sucursalIDModel: Sucursal;
  public sucursalActualizada;
  constructor(private _productoService: ProductoService, private _sucursalService: SucursalService) {
    this.productoIDModel = new Producto("","","","",0,"");
    this.sucursalIDModel = new Sucursal("","","","","","","");
   }

  ngOnInit(): void {
    this.listarProductos();
    this.obtenerSucursales();
  }

  agregarProducto(){
    this._productoService.agregarProducto(this.productoIDModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductos();
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }

  editarProducto(id){
    this._productoService.editarProducto(this.productoIDModel, id).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto editado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductos();
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }

  eliminarProducto(id){
    this._productoService.eliminarProducto(id).subscribe(
      response=>{
        console.log(response.productoEliminado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto eliminado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductos();
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }

  listarProductosPorEmpresa(){
    this._productoService.listarProductosPorEmpresa().subscribe(
      response=>{
        console.log(response.productosXEmpresa);
        this.productosList = response.productosXEmpresa;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  listarProductos(){
    this._productoService.listarProductos().subscribe(
      response=>{
        console.log(response.productos);
        this.productosList = response.productos;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  obtenerProductoId(id){
    this._productoService.obtenerProductoId(id).subscribe(
      response=>{
        this.productoIDModel = response.producEncontrado;
      this.productoActualizado = response.producEncontrado;
      console.log(response.producEncontrado);
      }
    )
  }

  obtenerSucursales(){
    this._sucursalService.obtenerSucursales().subscribe(
      response=>{
        console.log(response.sucursales);
        this.sucursalesList = response.sucursales;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  obtenerSucursalId(id){
    this._sucursalService.obtenerSucursalId(id).subscribe(
      response=>{
        this.sucursalIDModel = response.sucursalEncontrada;
      this.sucursalActualizada = response.sucursalEncontrada;
      console.log(response.sucursalEncontrada);
      }
    )
  }

}
