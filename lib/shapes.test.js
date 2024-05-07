const { circle, square, triangle } = require('./shapes');

const renderTest = (shapeClass, points) => {
    describe(shapeClass.name, () => {
        test('redner correctly', () => {
            const shape = new shapeClass ();
            shape.setcolor('color');
            expect(shape.render()).toEqueal(`<${shapeClass.name} points='${points}' fill='color'/>`)
        });
    });
};

renderTests(Circle, '50%,50% 0,100% 100%,100%');
renderTests(Square, '50,50 50,150 150,150 150,50');
renderTests(Triangle, '0,200 300,200 150,0');