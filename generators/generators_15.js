function createIterable(...array) {
    return {
        *[Symbol.iterator]() {
            let i = 0;
            while (i < array.length) {
                yield array[i++];
            }
        }
    }
}
const iterable = createIterable("Fortran", "Lisp", "COBOL");
for (let language of iterable) {
    console.log(language);
}

// o * transforma o iterator em um generator. Poderia colocar o fucntion antes do *