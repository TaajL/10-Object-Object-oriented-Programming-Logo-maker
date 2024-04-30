// Import required modules 
import inquirer from 'inquirer';
import fs from 'graceful-fs'
import {circle, square, trianlge} from './lib/shapes.js';

class Svg {
    constructor() {
        const {textElement = '' , shapeElement = ''} = {};
        this.textElement = textElement;
        this.shapeElement = shapeElement;
    }

    render(){
        return ``
    }

    setTextElemt(text = '' , color = '') {
        this.textElement = ``
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    } 
}
