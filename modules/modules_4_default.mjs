import pow, {PI as pi} from './math2';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return pi * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);

// Nesse nosso exemplo, foi colocado um alias para o PI e após isso
// a sua referência no código deve ser pi e não PI.

// Só poode haver um default por module.

// Para executar arquivos com 'import', é necessário executar o arquivo da seguinte forma:
// node --experimental-modules modules_4_default.mjs
//
// Note que a extensão do arquivo deve ser .mjs e não .js como é o padrão javascript.