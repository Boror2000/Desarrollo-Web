const readline = require('readline-sync');

const students = [];

function addStudent() {
  const carnet = readline.question('Ingrese el carnet del estudiante: ');
  const nombre = readline.question('Ingrese el nombre del estudiante: ');
  students.push({ carnet, nombre, notas: [] });
  addNotes(carnet);
}

function addNotes(carnet) {
  const student = students.find(student => student.carnet === carnet);
  if (student) {
    const tarea = readline.question('Ingrese el nombre de la tarea: ');
    const nota = parseFloat(readline.question('Ingrese la nota obtenida: '));
    student.notas.push({ tarea, nota });
    const anotherNote = readline.question('¿Desea agregar otra nota para este estudiante? (s/n): ');
    if (anotherNote.toLowerCase() === 's') {
      addNotes(carnet);
    } else {
      const anotherStudent = readline.question('¿Desea agregar otro estudiante? (s/n): ');
      if (anotherStudent.toLowerCase() === 's') {
        addStudent();
      } else {
        generateSummary();
      }
    }
  } else {
    console.log('Estudiante no encontrado.');
  }
}

function generateSummary() {
  console.log('Resumen de notas:');
  students.forEach(student => {
    console.log(`Carnet: ${student.carnet}`);
    console.log(`Nombre: ${student.nombre}`);
    student.notas.forEach(nota => {
      console.log(`Tarea: ${nota.tarea}`);
      console.log(`Nota: ${nota.nota}`);
    });
    console.log('---');
  });
}

function startApp() {
  console.log('Bienvenido al sistema de control de notas.');
  addStudent();
}

startApp();