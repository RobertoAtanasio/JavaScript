const obj1 = {
    p1: 10,
    getP1: function() {
        const fn1 = () => {
            return this.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());

// na função arrow, a função fn1 não vai fazer sobre 
// no this. Logo, não haverá a necessidade de
// injetar a dependência that como no exemplo anterior 8