import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendaComponent } from './component/tienda/tienda.component';
import { ModalTiendaComponent } from './component/modal-tienda/modal-tienda.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { ModalArticuloComponent } from './component/modal-articulo/modal-articulo.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ModalClienteComponent } from './component/modal-cliente/modal-cliente.component';
import { CarritoCompraComponent } from './component/carrito-compra/carrito-compra.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenubarComponent,
    TiendaComponent,
    ModalTiendaComponent,
    ArticuloComponent,
    ModalArticuloComponent,
    ClienteComponent,
    ModalClienteComponent,
    CarritoCompraComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
