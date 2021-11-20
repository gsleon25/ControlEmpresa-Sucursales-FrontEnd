import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/sucursal.model';
import { Productosucursal } from 'src/app/models/productosucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ProductosucursalService } from 'src/app/services/productosucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicioadmin',
  templateUrl: './inicioadmin.component.html',
  styleUrls: ['./inicioadmin.component.scss'],
  providers: [SucursalService]
})
export class InicioadminComponent implements OnInit {
  public sucursalesList;
  public sucursalIDModel: Sucursal;
  public sucursalActualizada;
  public productosList;
  public productoIDModel: Productosucursal;
  public productoActualizado;
  constructor(private _sucursalService: SucursalService, private _productosucursalService: ProductosucursalService) {
    this.sucursalIDModel = new Sucursal("","","","","","","");
    this.productoIDModel = new Productosucursal("","","",0,0,"");
   }

  ngOnInit(): void {
    this.obtenerSucursales();
    this.listarProductosPorEmpresa();
  }

  agregarSucursal(){
    this._sucursalService.agregarSucursal(this.sucursalIDModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empresa creada correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerSucursales();
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

  editarSucursal(id){
    this._sucursalService.editarSucursal(this.sucursalIDModel, id).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empresa editada correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerSucursales();
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

  eliminarSucursal(id){
    this._sucursalService.eliminarSucursal(id).subscribe(
      response=>{
        console.log(response.empresaEliminada);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empresa eliminada correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerSucursales();
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

  obtenerSucursalNombre(){
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

  listarProductosPorEmpresa(){
    this._productosucursalService.listarProductosPorEmpresa().subscribe(
      response=>{
        console.log(response.productosXEmpresa);
        this.productosList = response.productosXEmpresa;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  obtenerProductoId(id){
    this._productosucursalService.obtenerProductoId(id).subscribe(
      response=>{
        this.productoIDModel = response.producEncontrado;
      this.productoActualizado = response.producEncontrado;
      console.log(response.producEncontrado);
      }
    )
  }


}


