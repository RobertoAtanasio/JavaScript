var person = {
    name: "Brendan Eich",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
var boundHello = function(thing) { return person.hello.call(person, thing); }
  
boundHello("world");

var bind = function(func, thisValue) {
    // console.log(func);
    // console.log(thisValue);
    return function() {
        // console.log(arguments);
        return func.apply(thisValue, arguments);
    }
}

var boundHello2 = bind(person.hello, person);
boundHello2("world"); // "Brendan Eich says hello world"

var boundHello3 = person.hello.bind(person);
boundHello3("world") // "Brendan Eich says hello world"