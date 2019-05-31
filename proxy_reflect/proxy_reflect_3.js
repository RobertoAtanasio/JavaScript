function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            console.log(target, key, value);
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);