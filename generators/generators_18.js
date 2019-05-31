function sum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
function async(fn) {
    console.log(fn);
    console.log(">>> fn:",fn);
    const gen = fn();
    //gen.next().value.then(function(result){
    //    console.log(result);
    //})
    //console.log(gen);
    //console.log(gen.next());
    //console.log(gen.next());
    //console.log(gen.next());
    //console.log(gen.next());
    asyncR(gen);
    //asyncR(fn());
}
function asyncR(gen, value) {
    const obj = gen.next(value);
    console.log(">>> obj",obj, gen, value);
    if (obj.done) return;
    obj.value.then(function (result) {
        console.log("result:",result);
        asyncR(gen, result);
    });
}
async(function* () {
    const a = yield sum(2, 2);
    //console.log(">>> a:",a);
    const b = yield sum(4, 4)
    const result = yield sum(a, b);
    console.log(">>> result",result);
});
