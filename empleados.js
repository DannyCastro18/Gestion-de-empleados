let protegido = new WeakMap();
    
class Empleado{
    nombre
    #salario
    constructor(nombre, salario){
        this.nombre = nombre
        this.#salario = salario
        this.obtenerSalario = () => {
            return this.#salario
        }
    }
    obtenerInformacion(){
        console.log("Nombre: " + this.nombre 
            + " Salario: " + this.#salario )
    }
}
export default Empleado;