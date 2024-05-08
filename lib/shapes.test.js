const { circle, square, triangle } = require('./shapes');

const renderTest = (shapeClass, points) => {
    describe(shapeClass.name, () => {
        test('redner correctly', () => {
            const shape = new shapeClass ();
            shape.setColor('color');
            expect(shape.color).toEqual(`color`)
        });
    });
};

renderTest(circle, '50%,50% 0,100% 100%,100%');
renderTest(square, '50,50 50,150 150,150 150,50');
renderTest(triangle, '0,200 300,200 150,0');