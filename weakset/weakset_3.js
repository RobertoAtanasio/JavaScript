const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log(ws1);

//const obj3 = "Valor";
//ws1.add(obj3);