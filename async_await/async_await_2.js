function sum(a, b) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    const a = await sum(2, 2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
})();

// o await só funciona dentro de uma função marcado com o async
// a função está sendo auto-invocada.
