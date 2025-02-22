import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tienda } from 'src/app/Model/Modelos';
import { TiendaService } from 'src/app/service/tienda.service';
import { ModalTiendaComponent } from '../modal-tienda/modal-tienda.component';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

  customerlist !: Tienda[];
  dataSource: any;
  displayedColumns: string[] = ["sucursal", "direccion", "action"];

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: TiendaService, private dialog: MatDialog) {
    this.load();
  }

  load() {
    this.service.GetTienda().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Tienda>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  edit(code: any) {
    this.OpenModal(code, 'Editar Tienda',ModalTiendaComponent);
  }

  
  
  delete(id:any) {
    debugger
    this.service.Delete(id).subscribe(res => {
      this.load();
    });
  }
  add(){
    this.OpenModal(0, 'Agregar Tienda',ModalTiendaComponent);
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
