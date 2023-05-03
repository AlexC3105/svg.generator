const inquirer = require(`inquirer`);
const fs = require(`fs`);
const SVG = require(`./svg`);
const {Circle} = require(`./shapes`);
const {Square} = require(`./shapes`);
const {Triangle} = require(`./shapes`);

class CLI {
    run() {
        return inquirer.prompt([
            {
                type: `list`,
                name: `shape`,
                choices: [`Circle`, `Square`, `Triangle`],
                message: `Please choose a shape for your logo:`
            },
            {
                type: `input`,
                name: `text`,
                message: `Please enter the characters for your logo, (Max 3 char.):`
            },
            {
                type: `input`,
                name: `shapeColor`,
                message: `Please enter a color for the shape selected:`
            },
            {
                type: `input`,
                name: `textColor`,
                message: `Please enter a color for the text selected:`
            },
        ])
        .then((data) => {
            let shape
            const fileName = `./output/logo.svg`
            const svg = new SVG()

            if (data.shape === `Circle`) {
                shape = new Circle
            } else if (data.shape === `Square`) {
                shape = new Square
            } else if (data.shape === `Triangle`) {
                shape = new Triangle
            }
            shape.setShapeColor(data.shapeColor)
            svg.createText(data.text, data.textColor)
            svg.createShape(shape)

            fs.writeFile(fileName, svg.render(), (err) => {
                if (err) {
                    console.log(err)
                } console.log(`Success !!! Your SVG file was created, check the output folder for your result.`)
            });
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}

module.exports = CLI;