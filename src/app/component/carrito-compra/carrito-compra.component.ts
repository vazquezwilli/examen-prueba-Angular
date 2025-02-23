import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo, CarritoCompra } from 'src/app/Model/Modelos';
import { ArticuloService } from 'src/app/service/articulo.service';
import { CarritoCompraService } from 'src/app/service/carrito-compra.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {
articulosList !: CarritoCompra[];
articulosAComprarList !: Articulo[];

  dataSource: any;
  dataSourceArticulos: any;

  displayedColumns: string[] = ["articuloDescripcion", "action"];
  displayedColumnsAgregar: string[] = ["descripcion","precio", "action"];


  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: CarritoCompraService, private dialog: MatDialog, 
              private serviceArticulos: ArticuloService
  ) {
    this.load();
    this.loadArticulos();
  }

  load() {
    let idClienteUsuario = localStorage.getItem("idClienteUsuario");
 
    this.service.GetAll(idClienteUsuario).subscribe(res => {
      this.articulosList = res;
      this.dataSource = new MatTableDataSource<CarritoCompra>(this.articulosList);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  loadArticulos() {
 
    this.serviceArticulos.GetAll().subscribe(res => {
      this.articulosAComprarList = res;
      this.dataSourceArticulos = new MatTableDataSource<Articulo>(this.articulosAComprarList);
      this.dataSourceArticulos.paginator = this.paginatior;
      this.dataSourceArticulos.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  
  delete(id:any) {
    this.service.Delete(id).subscribe(res => {
      this.load();
    });
  }
  addCart(idArticulo:any)
  {
    let idClienteUsuario = localStorage.getItem("idClienteUsuario");
    let model  ={
      idCliente:idClienteUsuario,
      idArticulo:idArticulo
    };
    this.service.Save(model).subscribe(res => {
      if(res == "1" )
        {
          alert("Se agregó articulo al carrito")
          this.load();
          
        }

    });
  }
}
