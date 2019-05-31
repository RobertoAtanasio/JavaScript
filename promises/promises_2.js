function delayedSum(a, b) {
    setTimeout(function() {
        return a + b;
    }, 2000);
}
const result = delayedSum(2, 2);
console.log(result);

// retorna undefined porque o setTimeout só retornou depois de 2 segundos
