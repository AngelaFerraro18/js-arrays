const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++){ /*posso aggiungere una variabile const dove il valore sarà teachers[i], es. const currentTeachers = teachers[i] che poi andrò a sostituire successivamente */
  if (teachers[i].length >= 5){
   longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const teacherReplaced = teachers.toSpliced(5, 1); /* ----> è bene creare una variabile e cercare l'index dell'elemento che vogliamo cancellare perchè noi lo sappiamo dove si trova, ma il calcolatore no, quindi salvo poi il risultato nella variabile e poi lo vado a rimuovere */
console.log(teacherReplaced);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// const isFabioPresent = null;

let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++){
  if(teachers[i] === 'Fabio'){
    isFabioPresent = true;
    break; /*----> lo aggiungo perchè mi interessa sapere che c'è fabio, non è necessario controllare 100k elementi di un array*/
  }
}
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.toString(); ---> metodo non esatto, usare join

const teachersString = teachers.join(',');
console.log(teachersString);