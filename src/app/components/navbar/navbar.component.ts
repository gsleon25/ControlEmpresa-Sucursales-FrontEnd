import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SucursalService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  constructor(public _sucursalService: SucursalService) {
    this.identidad = this._sucursalService.obtenerIdentidad();
  }

  ngOnInit(): void {
    console.log(this.identidad);

  }

  cerrarSesion(){
    localStorage.clear()
  }

}
