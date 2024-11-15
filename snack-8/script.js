const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// prima scelta
const student = students.find((student) => student.name === "Marco Lanci");
console.log(student.class);

// seconda scelta
students.forEach((student) => (student.name === "Marco Lanci") ? console.log(student.class) : null);

// filter restituisce un array non é in questo caso la scelta migliore
const student2 = students.filter((student) => student.name === "Marco Lanci");
console.log(student2[0].class);


// const student3 = students.map((student) => {
//   (student.name === "Marco Lanci") ? console.log(student.class) : null;
// });
//console.log(student3) 
// Anche se ho messo una condizione mi sono accorta che map non serviva.

