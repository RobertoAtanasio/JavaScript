import pow, {PI} from './math2';
export default class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}

// Só poode haver um default por module.