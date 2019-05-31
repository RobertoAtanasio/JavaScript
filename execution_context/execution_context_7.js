const obj1 = {
    p1: 10,
    getP1: function() {
        function fn1() {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());

// a função getP1 foi invocada pelo obj1, mas o this
// está na função que foi referenciada por outra que
// não é o obj1