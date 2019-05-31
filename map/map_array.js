const precos = [10, 20, 30];

const precosReais = precos.map(function(preco) {
   // return 'RS ' + preco + ',00';
    return `R$ ${preco},00`;
});

const precosReais2 = precos.map( preco => {return `R$ ${preco},00`} );
const precosReais3 = precos.map( preco => `R$ ${preco},00` );
const precoAcima20 = precos.filter( preco => preco >= 20 );
const precoAcima20B = precoAcima20.map( preco => `R$ ${preco},00` );
const precoAcima20C = precos.filter( preco => preco >= 20 ).map( preco => `R$ ${preco},00` );

console.log(precosReais);
console.log(precosReais2);
console.log(precosReais3);
console.log(precoAcima20);
console.log(precoAcima20B);
console.log(precoAcima20C);