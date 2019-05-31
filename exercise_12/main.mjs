import {Database} from "./database";

(async function() {
    try {
        const database = new Database();
        await database.execute("create table author (id number, name string, age number, city string, state string, country string)");
        await Promise.all([
            database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
            database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
            database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
        ]);
        const result = await database.execute("select name, age from author");
        console.log(JSON.stringify(result, undefined, "  "));
    } catch (e) {
        console.log(e.message);
    }
})();

// para executar: node --experimental-modules main.mjs

// aqui foi um teste que eu fiz....
const years = [1990, 1991, 1992, 1993];
let ages5 = years.map(function(element){
    return 2019 - element;
});
console.log(">>>>>",ages5);

let ages6 = years.map(element => 2019 - element);
console.log(">>>>>",ages6);

ages6 = years.map((element, index) => `Age element ${index} is ${2019 - element}`);
console.log(">>>>>",ages6);

ages6 = years.map((element, index) => {
    const now = new Date().getFullYear();
    const age = now - element;
    return `Age element ${index} is ${age}.`;
});
console.log(">>>>>",ages6);