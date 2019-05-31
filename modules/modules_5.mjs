import * as math from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return math.PI * math.pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);

// o * faz com seja importado TODAS as variáves que foram exportadas sem ter
// que definir uma a uma n aimportação.
// Veja que o acesso é via notação de ponto.