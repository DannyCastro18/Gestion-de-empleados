
class Empresa{
    constructor(nombre){
        this.nombre = nombre;
        this.listaDepartamento = []; //arreglo
    }
    agregarDepartamento(nombreDepartamento){
        this.listaDepartamento.push(nombreDepartamento)
    }
    listarDepartamento(){
        this.listaDepartamento.forEach(departamento => 
            console.log(departamento.nombre)
        );
    }
}
export default Empresa;