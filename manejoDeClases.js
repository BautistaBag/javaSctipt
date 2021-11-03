class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}
//Empleado hereda las propiedades de la clase Persona
class Empleado extends Persona{
constructor(nombre,apellido,departamento){
    super(nombre,apellido);
    this._departamento = departamento;
}
get departamento(){
    return this._departamento;
}
set departamento(departamento){
    this._departamento = departamento;
}
}

let persona = new Persona('juan','perez');
console.log(persona.nombre);
persona.nombre = 'Juan Carlos';  //llama  a set nombre('Juan Carlos')
console.log(persona.nombre);

let empleado = new Empleado('bautista', 'martinez','sistema');
console.log(empleado);
