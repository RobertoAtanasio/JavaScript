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
        functions.forEach(async function(fn) {
            const result = await fn;
            console.log(result);
            results.push(result);
        });
        const [a,b] = results;
        console.log(a, b);
        // esta chamada ocorrerá imediatamente após a chamada do forEach e antes que o forEach execute
        // daí apresentar a mensagem: Invalid input definida na função sum acima.
        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();

// sempre que se trabalhar com async await deve-se evitar o forEach
// pois não se controla bem o sei comportamento.