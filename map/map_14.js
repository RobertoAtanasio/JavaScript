const obj = Object.create(null);
console.log("toString" in obj);
console.log("valueOf" in obj);

//--- com o null, o protótipo foi 'excluído'