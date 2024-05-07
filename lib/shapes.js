class shape {
    constructor(color = '') {
        this.color = color
    }

    setColor(color) {
        this.color = color;
    }
}

class circle extends shape {
    render() {
       return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`; 
    }    
}

class square extends shape {
    render() {
       return `<rect x="50" y="50" height="100" width="100" fill="${this.color}"/>`; 
    }
}

class triangle extends shape {
    render() {
       return  `<polygon points="0,200 300,200 150,0" fill="${this.color}"/>`; 
    }
}

export {circle, square, triangle};