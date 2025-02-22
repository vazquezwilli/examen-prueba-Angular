import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente, Tienda } from "../Model/Modelos";
import { appsettings } from "../Settings/appsettings";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private baseUrl: string = appsettings.apiUrl + 'Clientes/' ;

    constructor(private http: HttpClient) { }

    GetAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${this.baseUrl}`);
    }

    Save(data: any) {
        if (data.id > 0) {
            return this.http.put(`${this.baseUrl}Edit`, data);
        }
        data.id = 0;
        return this.http.post(`${this.baseUrl}Create`, data);
    }

    GetById(id: any) {
        return this.http.get<Cliente[]>(`${this.baseUrl}GetById/?id=${id}`);
    }

    Delete(id:any){
        return this.http.post(`${this.baseUrl}Delete/?id=${id}`,id);
    
      }
}