import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Modelos';
import { LoginService } from 'src/app/service/login.service';
import { ServicioUsuarioService } from 'src/app/service/servicio-usuario.service';

@Component({
  selector: 'app-login',
//   standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuild.group({
    correo: ['',Validators.required],
    contrasena: ['',Validators.required]
})

constructor(private service: LoginService, private serviceUsuario: ServicioUsuarioService){}
iniciarSesion(){
  if(this.formLogin.invalid) return;

  const objeto:Login = {
       correo: this.formLogin.value.correo,
       contrasena: this.formLogin.value.contrasena
  }

  this.service.login(objeto).subscribe({
       next:(data) =>{
            if(data.isSuccess){            
                 localStorage.setItem("token",data.token)
                 localStorage.setItem("idClienteUsuario",data.idUsuarioCliente.toString())
                 localStorage.setItem("clienteUsuario",objeto.correo)

                 this.router.navigate(['carritoCompra'])
                 this.serviceUsuario.disparadorDeUsuario.emit(objeto.correo);
            }else{
                 alert("Usuario o Contraseña Incorrecto")
            }
       },
       error:(error) =>{
            console.log();
            alert(error.message)
       }
  })
}

registrarse(){
     this.router.navigate(['cliente'])
}

}
