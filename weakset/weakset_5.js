const circles = new WeakSet();
function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculateArea = function() {
    // se a origem da chamada a função não tiver o prototype da função Circle
    // este teste não permitirá a execução. No nosso caso, a chamada via call abaixo, uma
    // vez que o this (de circle2), quando desta chamada, foi criado manualmente. Não passou pelo 
    // circles.add(this) da função construtora acima.
    // Se retirar este teste, a rotina funciona.
    if (!circles.has(this)) throw "Invalid object";
    return Math.PI * Math.pow(this.radius, 2);
};
const circle1 = new Circle(10);
const circle2 = {
    radius: 5
};
console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
