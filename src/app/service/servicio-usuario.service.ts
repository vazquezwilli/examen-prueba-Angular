import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
 @Output() disparadorDeUsuario: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
