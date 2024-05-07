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