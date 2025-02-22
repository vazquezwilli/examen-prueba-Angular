import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticuloService } from 'src/app/service/articulo.service';

@Component({
  selector: 'app-modal-articulo',
  templateUrl: './modal-articulo.component.html',
  styleUrls: ['./modal-articulo.component.css']
})
export class ModalArticuloComponent {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ModalArticuloComponent>, private buildr: FormBuilder,
    private service: ArticuloService) {

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
      this.myform.setValue({id:code,codigo:this.editdata.codigo,descripcion:this.editdata.descripcion,precio:this.editdata.precio
       })
    });
  }

  closeModal() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    id:this,
    codigo: this.buildr.control(''),
    descripcion: this.buildr.control(''),
    precio: this.buildr.control('')
  });

  save() {
    debugger
    this.service.Save(this.myform.value).subscribe(res => {
      this.closeModal();
    });
  }


}
