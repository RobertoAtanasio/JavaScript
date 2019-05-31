function isFullAge5 (limit) {
    let anoAtual = new Date().getFullYear();
    console.log("ES5 arguments:",arguments);
    let arrArgs = Array.prototype.slice.call(arguments, 1);
    console.log("ES5 array:",arrArgs);
    arrArgs.forEach((element,key) => {
        console.log("ES5 loop 1:",element, key, limit, (anoAtual - element) >= limit); 
    });
    arrArgs.forEach(function(element,key){
        console.log("ES5 loop 2:",element, key, limit, (anoAtual - element) >= limit); 
    });
};

isFullAge5(18,1967,1972,2008);

console.log("-----------------------");

function isFullAge6 (limit, ...years) {
    let anoAtual = new Date().getFullYear();
    console.log("ES6 years:",years);
    years.forEach((element,key) => {
        console.log("ES6 loop:",element, key, (anoAtual - element) >= limit);  
    });
};
isFullAge6(1967,1972,2008,2002);