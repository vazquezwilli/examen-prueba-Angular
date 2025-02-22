import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tienda } from "../Model/Modelos";
import { appsettings } from "../Settings/appsettings";

@Injectable({
    providedIn: 'root'
})
export class TiendaService {

    private baseUrl: string = appsettings.apiUrl;
    
    constructor(private http: HttpClient) { }



    GetTienda(): Observable<Tienda[]> {
        return this.http.get<Tienda[]>(`${this.baseUrl}Tienda`);
    }

    SaveTienda(data: any) {
        if (data.id > 0) {
            return this.http.put(`${this.baseUrl}Tienda/Edit`, data);
        }
        data.id = 0;
        return this.http.post(`${this.baseUrl}Tienda/Create`, data);
    }

    GetById(id: any) {
        return this.http.get<Tienda[]>(`${this.baseUrl}Tienda/GetById/?id=${id}`);
    }

    Delete(id:any){
        return this.http.post(`${this.baseUrl}Tienda/Delete/?id=${id}`,id);
    
      }
}