const createPerson = (name, city, year) => ({name, city, year});
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);

//--- sempre que se for retornar um objeto de dentro de arrow function, tem-se que 
//    colocar os parênteses.
