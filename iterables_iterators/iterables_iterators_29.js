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
console.log([...iterable]);

// diferente do código do arquivo 27, esse código
// incluiu o return { [Symbol.iterator]() {} }
// então o ...iterable vai funcionar