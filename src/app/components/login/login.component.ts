import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SucursalService]
})
export class LoginComponent implements OnInit {
  public sucursalModel: Sucursal;
  public token;
  public identidad;
  constructor(private _sucursalService: SucursalService, private _router: Router) {
    this.sucursalModel = new Sucursal("","","","","","","");
   }

  ngOnInit(): void {
  }

  obtenerToken(){
    this._sucursalService.login(this.sucursalModel, 'true').subscribe(
      response=>{
  //    console.log(response.token);
        this.token = response.token;
        localStorage.setItem('token', this.token)
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  /*
  login(){
    this._sucursalService.login(this.sucursalModel).subscribe(
      response=>{
//      console.log(response);
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.obtenerToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sesion iniciada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this._router.navigate(['inicioAdmin'])
      },
      error=>{
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
*/

login(){
  this._sucursalService.login(this.sucursalModel).subscribe(
    response=>{
      console.log(response);
      this.identidad = response.sucursalEncontrada;
      localStorage.setItem('identidad', JSON.stringify(this.identidad));
      this.obtenerToken();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sesion iniciada correctamente',
        showConfirmButton: false,
        timer: 1500
      })

      if(this.identidad.rol === 'ROL_ADMIN'){
        this._router.navigate(['inicioAdmin']);
      }else {
        if(this.identidad.rol === 'ROL_SUCURSAL'){
          this._router.navigate(['/inicioSucursal']);
        }else{
          this._router.navigate(['/login']);
        }
      }
    },
    error=>{
      console.log(<any>error)
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