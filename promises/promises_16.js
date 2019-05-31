function delayedSum(a, b, c = 0) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b + c);
        }, 1000);
    });
}
Promise.all([
    delayedSum(2, 2),
    delayedSum(4, 4),
    delayedSum(3, 3)
]).then(function(values) {
    let [a, b, c] = values;
    return delayedSum(a, b, c).then(function(result) {
        console.log(result);
    });
}).catch(function (e) {
    console.log(e);
});
