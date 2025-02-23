import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/service/servicio-usuario.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent  implements OnInit{
  userName: any;

constructor(private serviceUsuario: ServicioUsuarioService)
{}
  ngOnInit(): void {
    this.serviceUsuario.disparadorDeUsuario.subscribe(data=>{ 
    this.userName = localStorage.getItem("clienteUsuario");;
    });

    this.userName = localStorage.getItem("clienteUsuario");;

  }
 
  private router = inject(Router);
  
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('idClienteUsuario');
    localStorage.removeItem('clienteUsuario');    
    localStorage.clear();
    this.router.navigate(['login'])
    this.userName = '';
  }
}
