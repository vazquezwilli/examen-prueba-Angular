import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TiendaService } from 'src/app/service/tienda.service';
@Component({
  selector: 'app-modal-tienda',
  templateUrl: './modal-tienda.component.html',
  styleUrls: ['./modal-tienda.component.css']
})
export class ModalTiendaComponent {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ModalTiendaComponent>, private buildr: FormBuilder,
    private service: TiendaService) {

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
      this.myform.setValue({id:code,sucursal:this.editdata.sucursal,direccion:this.editdata.direccion
       })
    });
  }

  closeModal() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    id:this,
    sucursal: this.buildr.control(''),
    direccion: this.buildr.control('')
  });

  save() {
    debugger
    this.service.SaveTienda(this.myform.value).subscribe(res => {
      this.closeModal();
    });
  }


}
