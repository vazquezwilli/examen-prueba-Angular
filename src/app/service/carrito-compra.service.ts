import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Articulo, CarritoCompra, Tienda } from "../Model/Modelos";
import { appsettings } from "../Settings/appsettings";

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {
 private baseUrl: string = appsettings.apiUrl + 'clienteArticulo/' ;

    constructor(private http: HttpClient) { }

    GetAll(id:any): Observable<CarritoCompra[]> { 
        return this.http.get<CarritoCompra[]>(`${this.baseUrl}?idCliente=${id}`);
    }

    Save(data: any) {
        debugger
        return this.http.post(`${this.baseUrl}Create`, data);

    }

    GetById(id: any) {
        return this.http.get<CarritoCompra[]>(`${this.baseUrl}GetById/?id=${id}`);
    }

    Delete(id:any){
        return this.http.post(`${this.baseUrl}Delete/?id=${id}`,id);
    
      }
}