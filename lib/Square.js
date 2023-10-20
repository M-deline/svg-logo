const Shape = require('./shapes.js');

class Square extends Shape {
    constructor (shapeColor, text, color) {
        super(shapeColor, text, color);
    };
    render () {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="green">AXE</text>
    </svg>
        `
    };
};

module.exports = Square;