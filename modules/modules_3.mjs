import {PI, pow} from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);


// Para executar arquivos com 'import', é necessário executar o arquivo da seguinte forma:
// node --experimental-modules modules_3.mjs
//
// Note que a extensão do arquivo deve ser .mjs e não .js como é o padrão javascript.