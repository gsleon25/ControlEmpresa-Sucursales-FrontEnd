import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioadminComponent } from './components/inicioadmin/inicioadmin.component';
import { InicioempresaComponent } from './components/inicioempresa/inicioempresa.component';
import { InicioproductoComponent } from './components/inicioproducto/inicioproducto.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import  pdfFonts from "pdfmake/build/vfs_fonts";
import { IniciosucursalComponent } from './components/iniciosucursal/iniciosucursal.component';

PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    EmpresasComponent,
    InicioadminComponent,
    InicioempresaComponent,
    InicioproductoComponent,
    IniciosucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
