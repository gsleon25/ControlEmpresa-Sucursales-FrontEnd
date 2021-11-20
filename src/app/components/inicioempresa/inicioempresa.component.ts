import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicioempresa',
  templateUrl: './inicioempresa.component.html',
  styleUrls: ['./inicioempresa.component.scss'],
  providers: [UsuarioService]
})
export class InicioempresaComponent implements OnInit {
  public empleadosList;
  public usuarioIDModel: Usuario;
  public usuarioActualizado;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioIDModel = new Usuario("","","","","","","","");
   }

  ngOnInit(): void {
    this.obtenerEmpleadosPorEmpresa();
  }

  agregarEmpleado(){
    this._usuarioService.agregarEmpleado(this.usuarioIDModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empleado creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerEmpleadosPorEmpresa();
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

  editarEmpleado(id){
    this._usuarioService.editarEmpleado(this.usuarioIDModel, id).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empleado editado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerEmpleadosPorEmpresa();
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

  eliminarEmpleado(id){
    this._usuarioService.eliminarEmpleado(id).subscribe(
      response=>{
        console.log(response.empleadoEliminado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empleado eliminado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerEmpleadosPorEmpresa();
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

  obtenerEmpleadosPorEmpresa(){
    this._usuarioService.obtenerEmpleadosPorEmpresa().subscribe(
      response=>{
        console.log(response.empleadosXEmpresa);
        this.empleadosList = response.empleadosXEmpresa;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  obtenerEmpleadoId(id){
    this._usuarioService.obtenerEmpleadoId(id).subscribe(
      response=>{
        this.usuarioIDModel = response.empleadoEncontrado;
      this.usuarioActualizado = response.empleadoEncontrado;
      console.log(response.empleadoEncontrado);
      }
    )
  }

  generarPdf(nombre){
    this._usuarioService.generarPdf(nombre).subscribe(
      response=>{
        console.log(response.empleadoEliminado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empleado eliminado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.obtenerEmpleadosPorEmpresa();
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

}
