const somar = (a, b, c) => {
    return a + b + c;
};
const subtract = (a, b) => {
    return a - b;
};
const calculadora = (fn) => {
    return (a, b, c) => {
        return fn(a, b, c);
    };
};
console.log("Valor da soma = " + calculadora(somar)(5, 2, 1));
console.log(calculadora(subtract)(2, 2));
