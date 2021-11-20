import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [SucursalService]
})
export class EmpresasComponent implements OnInit {
  public sucursalesList;
  constructor(private _sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.obtenerSucursales();
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
        console.log(response);

      }
    )
  }

}
