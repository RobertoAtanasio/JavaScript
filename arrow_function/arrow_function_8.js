const sum = () => {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));

//--- obs: se não existir nenhum parâmetro é obrigado
//    a ter os parênteses. O único caso que não precisa
//    dos parênteses é quando se tem apenas um argumento.

//--- Nesse caso acima, a função arrow não é recomendada 
//    quando se quer tratar o parâmetro 'arguments'