import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioadminComponent } from './components/inicioadmin/inicioadmin.component';
import { InicioempresaComponent } from './components/inicioempresa/inicioempresa.component';
import { InicioproductoComponent } from './components/inicioproducto/inicioproducto.component';
import { IniciosucursalComponent } from './components/iniciosucursal/iniciosucursal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicioAdmin', component: InicioadminComponent},
  { path: 'inicioEmpresa', component: InicioempresaComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'inicioProducto', component: InicioproductoComponent },
  { path: 'inicioSucursal', component: IniciosucursalComponent },

  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
