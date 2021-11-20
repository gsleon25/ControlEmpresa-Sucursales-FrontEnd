import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ UsuarioService ]
})
export class RegisterComponent implements OnInit {
  public usuarioModel: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModel = new Usuario("","","","","","","","");
   }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    this._usuarioService.agregarEmpleado(this.usuarioModel).subscribe(
      response=>{
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario agregado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
