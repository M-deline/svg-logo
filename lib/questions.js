const colorChoices = require('./colorChoices.js')

const questions = [
        {
            //the svg logo text
            type: 'input',
            name: 'text',
            message: 'Enter your three characters...',
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log("Must be 3 characters...")
                }
            return true;
        }
        },
        //color of the text
        {
            type: 'input',
            name: 'color',
            message: 'Enter your text color, you may type the name of the color or the hexadecimal number...',
            validate: (answer) => {
                if (colorChoices.includes(answer)) {
                    return true;
                }
                return 'Please enter a valid color name or hexadecimal number.';
            }
        },
        {
            type: 'list',
            name: 'shape',
            message: "Choose your shape...",
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter your shape color, you may type the name of the color or the hexadecimal number...',
            validate: (answer) => {
                if (colorChoices.includes(answer)) {
                    return true;
                }
                return 'Please enter a valid color name or hexadecimal number.';
            }
        },
    ];


    module.exports = questions;