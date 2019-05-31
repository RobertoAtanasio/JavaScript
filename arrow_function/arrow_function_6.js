const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person);
console.log(person.getAge());

//--- nesse caso, para métodos, não se deve usar a arrow fucntion
//    uma vez que o this não funciona!!!