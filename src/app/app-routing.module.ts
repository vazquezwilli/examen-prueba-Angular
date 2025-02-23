import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { ArticuloComponent } from './component/articulo/articulo.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { CarritoCompraComponent } from './component/carrito-compra/carrito-compra.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',component:TiendaComponent},
  {path:'login',component:LoginComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'articulo',component:ArticuloComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'carritoCompra',component:CarritoCompraComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
