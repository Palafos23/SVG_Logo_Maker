// Jest tests for shapes
const {Triangle, Circle, Square} = require('../lib/shapes.js');

describe('Triangle', () => {
    test('should render a triangle', () => {
        const shape = new Triangle();
        shape.setShapeColor(`red`);
        shape.setOutline('red');
        expect(shape.render()).toEqual(`<polygon stroke="red" stroke-width="2" height="100" width="100" points="200,10 270,190 120,190" fill="red"/>`);
    })
})

describe('Circle', () => {
    test('should render a circle', () => {
        const shape = new Circle();
        shape.setShapeColor(`blue`);
        shape.setOutline('blue');
        expect(shape.render()).toEqual(`<circle stroke="blue" stroke-width="2" height="100" width="100" cx="197" cy="140" r="75" fill="blue"/>`);
    })
})

describe('Square', () => {
    test('should render a square', () => {
        const shape = new Square();
        shape.setShapeColor(`green`);
        shape.setOutline('green');
        expect(shape.render()).toEqual(`<rect stroke="green" stroke-width="2" x="95" y="95" width="200" height="90" fill="green"/>`);
    })
})