import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { CarritoCompraComponent } from './component/carrito-compra/carrito-compra.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'articulo',component:ArticuloComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'carritoCompra',component:CarritoCompraComponent,canActivate:[authGuard]},
  {path:'table',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
