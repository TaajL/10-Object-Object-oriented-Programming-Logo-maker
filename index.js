// Import required modules 
import inquirer from 'inquirer';
import fs from 'fs/promises';
import fs from 'graceful-fs'
import {circle, square, trianlge} from './lib/shapes.js';
import { choices } from 'yargs';

//Defines and Svg Class that represents and SVG element
class Svg {
    constructor() {
        const {textElement = '' , shapeElement = ''} = {};
        this.textElement = textElement;
        this.shapeElement = shapeElement;
    }
    // Render the SVG element as string 
    render(){
        return ``
    }
    // Set the text element  with the given text and color
    setTextElemt(text = '' , color = '') {
        this.textElement = ``
    }
    // set the shape element using the given shape object
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    } 
}
// variable for questions array 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: `TEXT: Enter up to (3) Characters:`,
    },
    {
        type: 'input',
        name: 'text-color',
        message: `TEXT COLOR: Enter a color keyword (OR a hexadecimal number):`, 
    },
    {
        type: 'input',
        name: 'shape-color',
        message: `SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):`,
    },
    {
        type: 'List',
        name: 'pixel-image',
        message: 'Choose which Pixel Image you would like?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

const { text, textColor, shapeColor, pixelImage } = await inquirer.prompt

//Write to file function 
async function writeToFile(fileName, Data){
    console.log(`Writing [${data}] to file [${fileName}]`);

    try {
        await fs.writeFile(fileName, data);
        console.log('You have succesfully generated a logo.svg!');
    } catch (err) {
        console.log(err);
    }
}
// Async function to initialize the applications
async function init() {
    console.log('initialize application');
    
    //initialze variables 
    const svgFile = 'logo.svg';
    const { text, text: textInput, textColor, shape, pixelImage } = await inquirer.prompt(questions);
    const userText =
        textInput.length > 0 && textInput.length < 4
        ? textInput 
        : console.log('Please enter 1-3 characters no more or less!')
    const userFontColor = textColor;
    let userShapeColor = shape;
    let userShapetype = pixelImage.toLowerCase ();
    let userShape;

    switch (userShapetype) {
        case 'square':
            userShape = new square()
            console.log('user chose square');
            break;
        case 'triangle':
                userShape = new triangle()
                console.log('user chose trianlge');
                break;
        case 'circle':
            userShape = new circle()
            console.log('user chose circle');
            break;
        default :
            console.log('invalid shape');
            return;
    }

    userShape.setColor(userShapeColor);

    // create a new SVG element adding text and shape elements to it 
    const svg = new class {
        constructor() {
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userFontColor}">${userText}</text>`;
            this.shapeElement = userShape.render();
        }

        render () {
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
                }
        }();

        // print shape to the conssole 
        console.log(`display shape:\n\n${svg.render()}`);

        // write shape to file 
        console.log('shape generated!');
        await fs.writeFile(svgFile, svg.render());
        console.log('successfully written!')

    }

    // call init function and start application 
    init();






