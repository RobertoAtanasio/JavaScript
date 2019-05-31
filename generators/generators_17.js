function sum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
const a = sum(2, 2);
console.log("a =",a);
const b = sum(4, 4);
console.log("b =",b);
const result = sum(a, b);
console.log(result);
