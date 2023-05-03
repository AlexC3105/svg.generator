const {Circle, Square, Triangle} = require(`./shapes`);

test (`Should render Circle`, () => {
    const shape = new Circle();
    shape.setShapeColor(`blue`);
    const expectedShape = `<circle cx="150" cy="100" r="80" fill="blue" />`
    expectedShape(shape.render()).toEqual(expectedShape);
})

test (`Should render Square`, () => {
    const shape = new Square();
    shape.setShapeColor(`green`);
    const expectedShape = `<rect x="90" y="40" width="120" height="120" fill="green" />`
    expectedShape(shape.render()).toEqual(expectedShape);
})

test (`Should render Triangle`, () => {
    const shape = new Triangle();
    shape.setShapeColor(`red`);
    const expectedShape = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
    expectedShape(shape.render()).toEqual(expectedShape);
})