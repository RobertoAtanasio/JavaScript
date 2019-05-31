function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ];
        const results = [];
        for await (let result of functions) {
            results.push(result);
        }
        const [a,b] = results;
        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();

// apesar do curso informar que para a execução desta forma 
// de definição do for await, a minha versão do node já aceita
// a execução sem os parâmetros citados.
// node --harmony-async-iteration async_await_8.js