function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);

function createArray2() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        deleteProperty(target, key) {
        }
    });
}

// o  deleteProperty intercepta o comando delete e como não foi feito
// nada, o delete não foi executado.

console.log("================================");

const languages2 = createArray2();
languages2[0] = "Python";
languages2[1] = "Ruby";
languages2[2] = "JavaScript";
console.log(languages2);
console.log(languages2.length);
delete languages2[1];
delete languages2[2];
delete languages2[3];
console.log(languages2);
console.log(languages2.length);