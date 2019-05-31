function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        get(target, key) {
            console.log(">>> get:",target,key);
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log("languages:",languages);
console.log("languages.length:",languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log("languages2:",languages);
console.log("languages.length2:",languages.length);

// o get intercepa a propriedade e não dá o prosseguimento
// então a propriedade languages.length retorna undefined