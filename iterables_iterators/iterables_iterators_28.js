function createIterable(...array) {
    return {
        [Symbol.iterator]() {
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
    }
}
const iterable = createIterable("Fortran", "Lisp", "COBOL");
for (let language of iterable) {
    console.log(language);
}

// diferente do código do arquivo 26, esse código
// incluiu o return { [Symbol.iterator]() {} }
// então o for of vai funcionar