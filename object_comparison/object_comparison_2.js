const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};

/* for (const key in book1) {
    if (book1.hasOwnProperty(key)) {
        const element = book1[key];
        console.log(element);
    }
} */
let equal = true;
for (let key in book1) {
    if (book1[key] !== book2[key]) equal = false;
}
for (let key in book2) {
    if (book2[key] !== book1[key]) equal = false;
}
console.log(equal);
