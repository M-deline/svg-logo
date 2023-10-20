const Square = require('../lib/Square.js');

describe("Square test", () => {
    test("test to make a square with blue behind it and green text", () => {
        const square = new Square('white', 'SVG', 'green');
        expect(square.render()).toEqual(`
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="green"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>
            `
        )
})
});