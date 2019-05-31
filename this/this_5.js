var person = {
    name: "Brendan Eich",
    hello: function(thing) {
        console.log(this + " says hello " + thing);
    }
}

var person2 = {
    name: "Brendan Eich",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}
  
// this:
person.hello("world")

// desugars to this:
person.hello.call(person, "world");
person.hello.call(undefined, "world");

console.log('---------------------');

// this:
person2.hello("world")

// desugars to this:
person2.hello.call(person2, "world");
person2.hello.call(undefined, "world");
