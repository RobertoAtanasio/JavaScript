function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
console.time("performance");
Promise.all([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(values) {
    console.log(">>>",values);
    let [a, b] = values;
    return delayedSum(a, b).then(function(result) {
        console.log("Resultado:",result);
        console.timeEnd("performance");
    });
}).catch(function (e) {
    console.log(e);
});

// os dois delayedSum acima dentro da Promise.all são 
// executados em paralelo. Quando todas terminam a function
// do .then é executada.