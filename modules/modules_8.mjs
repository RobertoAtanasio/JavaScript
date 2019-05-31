//import Circle from './circle';
function fn1() {
    import Circle from './circle';
    const circle = new Circle(10);
    console.log(circle);
    console.log(circle.area);
}
fn1();

// a importação e a exportação não pode estar dentro de bloco
