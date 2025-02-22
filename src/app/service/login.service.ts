import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Articulo, Cliente, Login, Tienda } from "../Model/Modelos";
import { appsettings } from "../Settings/appsettings";
import { ResponseAcceso } from "../Model/ResponseAcceso";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }
    private baseUrl: string = appsettings.apiUrl + 'Security/' ;
  
    login(objeto: Login): Observable<ResponseAcceso> {
        debugger
        var d=`${this.baseUrl}Login`;
         return this.http.post<ResponseAcceso>(`${this.baseUrl}Login`, objeto)
    }

     
}