import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Articulo, Tienda } from "../Model/Modelos";
import { appsettings } from "../Settings/appsettings";

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {
    private baseUrl: string = appsettings.apiUrl + 'Articulo/' ;

    constructor(private http: HttpClient) { }

    GetAll(): Observable<Articulo[]> {
        return this.http.get<Articulo[]>(`${this.baseUrl}`);
    }

    Save(data: any) {
        if (data.id > 0) {
            return this.http.put(`${this.baseUrl}Edit`, data);
        }
        data.id = 0;
        return this.http.post(`${this.baseUrl}Create`, data);
    }

    GetById(id: any) {
        return this.http.get<Articulo[]>(`${this.baseUrl}GetById/?id=${id}`);
    }

    Delete(id:any){
        debugger
        return this.http.post(`${this.baseUrl}Delete/?id=${id}`,id);
    
      }
}