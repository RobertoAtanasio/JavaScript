function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
console.time("performance");
delayedSum(2, 2).then(function(a) {
    return delayedSum(4, 4).then(function(b) {
        return delayedSum(a, b).then(function(result) {
            console.log(result);
            console.timeEnd("performance");
        });
    });
}).catch(function (e) {
    console.log(e);
});
