import Empresa from "./empresa.js"
import Departamento from "./departamento.js";
import Empleado from "./empleados.js";

let miempresa = new Empresa ('techCorp');

let Desarrollo = new Departamento ("desarrollo")
miempresa.agregarDepartamento(Desarrollo);
let Marketing = new Departamento ("marketing")
miempresa.agregarDepartamento(Marketing);
let RH = new Departamento ("RH")
miempresa.agregarDepartamento(RH);
miempresa.listarDepartamento();

let empleado1 = new Empleado ('Javier Sandoval', 30000);
let empleado2 = new Empleado ('Camila Muñoz', 45000);
let empleado3 = new Empleado ('Santiago Manquillo', 37000);
console.log("Empleados")
Desarrollo.agregarEmpleados(empleado1);
Desarrollo.agregarEmpleados(empleado2);
Desarrollo.agregarEmpleados(empleado3);
Desarrollo.listarEmpleados();

Marketing.agregarEmpleados(empleado1);
Marketing.agregarEmpleados(empleado2);
Marketing.agregarEmpleados(empleado3);
Marketing.listarEmpleados();
