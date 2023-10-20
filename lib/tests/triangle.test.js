const Triangle = require('../lib/Triangle.js');

describe("Triangle test", () => {
    test("test to make a triangle with the words HEY in navy and the background orchid using hexidecimals", () => {
    const triangle = new Triangle ('#000080', 'HEY', '#da70d6');
expect(triangle.render()).toEqual( `
<svg version="1.1" 
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="100, 15 200, 200 0, 200" fill="##da70d6"/>
<text x="100" y="185" font-size="70" text-anchor="middle" fill="#000080">HEY</text>
</svg>`
)
})
});