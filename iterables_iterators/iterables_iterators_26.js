function createIterator(...array) {
    let i = 0;
    return {
        next() {
            if (i < array.length) {
                return {
                    value: array[i++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
const iterator = createIterator("Fortran", "Lisp", "COBOL");
for (let language of iterator) {
    console.log(language);
}
// o for of não tem o iterable. 
// Não tem a propriedade Simbol.iterator
