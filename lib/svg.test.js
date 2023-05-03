const SVG = require(`./svg`);
const {Triangle} = require(`./shapes`);

test(`should throw error if more than 3 char. entered.`, () => {
    const expectedError = new Error(`Text cannot exceed 3 char.`);
    const svg = new SVG();
    expect(() => svg.createText(`Texxxxxt`,`#bbbb`)).toThrow(expectedError);
})

test(`should render a 300 x 200 svg element`, () => {
    const svg = new SVG()
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect(svg.render()).toEqual(expectedSvg);
})

test(`should render svg`, () => {
    const svg = new SVG();
    svg.createText(`blue`, `SVG`);
    const shape = new Triangle();
    shape.setShapeColor(`red`);
    svg.createShape(shape);
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`
    expect(svg.render()).toEqual(expectedSvg);
})