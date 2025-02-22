import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ModalClienteComponent>, private buildr: FormBuilder,
    private service: ClienteService) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setModaldata(this.inputdata.code)
    }
  }

  setModaldata(code: any) {
    this.service.GetById(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({id:code,nombre:this.editdata.nombre,apellidos:this.editdata.apellidos,direccion:this.editdata.direccion,
        correo:this.editdata.correo, contrasena:this.editdata.contrasena
       })
    });
  }

  closeModal() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    id:this,
    nombre: this.buildr.control(''),
    apellidos: this.buildr.control(''),
    direccion: this.buildr.control(''),
    correo: this.buildr.control(''),
    contrasena: this.buildr.control('')

  });

  save() {
    this.service.Save(this.myform.value).subscribe(res => {
      this.closeModal();
    });
  }


}
