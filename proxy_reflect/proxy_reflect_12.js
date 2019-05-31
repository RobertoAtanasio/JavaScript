function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            //target[key] = value;
            Reflect.set(target, key, value);
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/^\d+$/)) {
                //if (!(key in target)) {
                if (!Reflect.has(target, key)) {
                    throw `Property ${key} not found`;
                }
            }
            //return target[key];
            return Reflect.get(target, key);
        },
        deleteProperty(target, key) {
            //if (key in target) {
            if (Reflect.has(target, key)) {
                target.length--;
                //delete target[key];
                Reflect.deleteProperty(target, key);
            }
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
console.log(languages[1]);
