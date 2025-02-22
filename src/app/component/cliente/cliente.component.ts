import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/Model/Modelos';
import { ClienteService } from 'src/app/service/cliente.service';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clienteList !: Cliente[];
  dataSource: any;
  displayedColumns: string[] = ["nombre", "apellidos","direccion", "correo","action"];

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: ClienteService, private dialog: MatDialog) {
    this.load();
  }

  load() {
    this.service.GetAll().subscribe(res => {
      this.clienteList = res;
      this.dataSource = new MatTableDataSource<Cliente>(this.clienteList);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  edit(code: any) {
    this.OpenModal(code, 'Editar Cliente',ModalClienteComponent);
  }

  delete(id:any) {
    this.service.Delete(id).subscribe(res => {
      this.load();
    });
  }
  add(){
    this.OpenModal(0, 'Agregar Cliente',ModalClienteComponent);
  }

  OpenModal(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      this.load();
    })
  }
}
