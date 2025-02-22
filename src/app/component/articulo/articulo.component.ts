import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/Model/Modelos';
import { ArticuloService } from 'src/app/service/articulo.service';
import { ModalArticuloComponent } from '../modal-articulo/modal-articulo.component';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  articuloList !: Articulo[];
  dataSource: any;
  displayedColumns: string[] = ["codigo", "descripcion","precio", "action"];

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: ArticuloService, private dialog: MatDialog) {
    this.load();
  }

  load() {
    this.service.GetAll().subscribe(res => {
      this.articuloList = res;
      this.dataSource = new MatTableDataSource<Articulo>(this.articuloList);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  edit(code: any) {
    this.OpenModal(code, 'Editar Articulo',ModalArticuloComponent);
  }

  
  
  delete(id:any) {
    this.service.Delete(id).subscribe(res => {
      this.load();
    });
  }
  add(){
    this.OpenModal(0, 'Agregar Articulo',ModalArticuloComponent);
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
