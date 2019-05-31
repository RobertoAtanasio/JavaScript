const timeUnits = [];
timeUnits[0] = "minute";
timeUnits[1] = "hour";
timeUnits[2] = "day";
console.log(timeUnits);
console.log(timeUnits.length);
delete timeUnits[1];
console.log(timeUnits);
console.log(timeUnits.length);

// obs: ao deletar um elemento do array, a propriedade lenght não se altera, ou seja,
// a ocorrência excluída continua fazendo parte do total de elementos do array.