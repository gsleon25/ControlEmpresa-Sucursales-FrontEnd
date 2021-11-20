import { Component, OnInit } from '@angular/core';
import { Productosucursal } from 'src/app/models/productosucursal.model';
import { ProductosucursalService } from 'src/app/services/productosucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciosucursal',
  templateUrl: './iniciosucursal.component.html',
  styleUrls: ['./iniciosucursal.component.scss'],
  providers: [ProductosucursalService]
})
export class IniciosucursalComponent implements OnInit {
  public productosList;
  public productoIDModel: Productosucursal;
  public productoActualizado;
  constructor(private _productosucursalService: ProductosucursalService) {
    this.productoIDModel = new Productosucursal("","","",0,0,"");
   }

  ngOnInit(): void {
    this.listarProductosPorEmpresa();
  }

  agregarProducto(){
    this._productosucursalService.agregarProducto(this.productoIDModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductosPorEmpresa();
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
    this._productosucursalService.editarProducto(this.productoIDModel, id).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto editado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductosPorEmpresa();
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
    this._productosucursalService.eliminarProducto(id).subscribe(
      response=>{
        console.log(response.productoEliminado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto eliminado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listarProductosPorEmpresa();
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
