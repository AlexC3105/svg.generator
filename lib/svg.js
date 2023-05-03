class SVG {
    constructor() {
        this.shapeElement = ``;
        this.textElement = ``;
    } render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    createText(text, textColor) {
        if (text.lenght > 3) {
            throw new Error(`Text must be max. 3 char.!!!`);
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    createShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;