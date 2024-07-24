import Empresa from "./empresa.js"


class Departamento extends Empresa{
    constructor(nombre, nombreDepartamento){
        super(nombre)
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = []; 
    }
    agregarEmpleados(nombreE){
        this.listaEmpleados.push(nombreE)
    }
    listarEmpleados(){
        this.listaEmpleados.forEach(empleados => 
            console.log(empleados)
        );
    }
}
export default Departamento; 