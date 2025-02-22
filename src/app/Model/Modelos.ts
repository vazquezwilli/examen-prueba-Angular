export interface Tienda{
    id:number,
    sucursal:string,
    domicilio:string
}

export interface Articulo{
    id:number,
    codigo:string,
    descripcion:string,
    precio:number,
    imagen:string
}

export interface Cliente{
    id:number,
    nombre:string,
    apellidos:string,
    direccion:number,
    correo:string,
    contrasena:string
}

export interface Login {
    correo:string,
    contrasena:string
}