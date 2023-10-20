const Circle = require('./Circle.js');
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');

function chooseShape(response) {
    if (response.shape == "Circle") {
        //shape color from question arrays
        let chosenShape = new Circle(response.shapeColor, response.text, response.color)
        return chosenShape.render();
    }
    if (response.shape == "Triangle") {
        let chosenShape = new Triangle(response.shapeColor, response.text, response.color)
        return chosenShape.render();
    }
    if (response.shape == "Square") {
        let chosenShape = new Square(response.shapeColor, response.text, response.color)
        return chosenShape.render();
    } };

    module.exports = chooseShape;