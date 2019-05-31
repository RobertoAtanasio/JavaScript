function hello(thing) {
    console.log(this + " says hello " + thing);
}
function hello2(thing) {
    console.log(" says hello " + thing);
}
  
hello.call("Yehuda", "world");
hello.call("world");
hello2.call("world");
hello2("world");
console.log('--------------------------------------');

function hello3(thing) {
    console.log("Hello " + thing);
}

// this:
hello3("world");

// desugars to:
hello3.call(undefined, "world");
