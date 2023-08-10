// Exports `Triangle`, `Circle`, and `Square` classes

class Shape{
    constructor() {
        this.shapecolor = '';
        this.newshape = '';
        this.outlinecolor = '';
    }
    setShapeColor(shapecolor){
        this.shapecolor = shapecolor; 
    }
    setNewShape(shape){
        this.newshape = shape.render(shape);
    }
    setOutline(outlinecolor){
         this.outlinecolor = outlinecolor;
     }
    }  

class Triangle extends Shape {
    render() {
        return `<polygon stroke="${this.outlinecolor}" stroke-width="2" height="100" width="100" points="200,10 270,190 120,190" fill="${this.shapecolor}"/>`
    };
}
class Circle extends Shape{
    render() {
        return `<circle stroke="${this.outlinecolor}" stroke-width="2" height="100" width="100" cx="197" cy="140" r="75" fill="${this.shapecolor}"/>`
       }
};

class Square extends Shape{
    render() {
        return `<rect stroke="${this.outlinecolor}" stroke-width="2" x="95" y="95" width="200" height="90" fill="${this.shapecolor}"/>`
       }
};

module.exports = {Triangle, Circle, Square};