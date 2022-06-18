class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;    
  }
  asignaturas = ["Javascript", "HTML", "CSS"];

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const nuevoEstudiante = new Estudiante('Eduardo');
const dataEstudiante = nuevoEstudiante.obtenDatos();

console.log(
  `Hola soy ${dataEstudiante.nombre} y estudio ${dataEstudiante.asignaturas["0"]}, ${dataEstudiante.asignaturas["1"]} y ${dataEstudiante.asignaturas["2"]}`
);
