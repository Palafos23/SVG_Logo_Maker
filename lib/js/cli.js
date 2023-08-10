const inquirer = require('inquirer'); 
 const {Triangle, Circle, Square} = require('./shapes');
const fs = require('fs');
const ShapeText = require('./svgtext.js');

class CLI{
    run() {
        return inquirer
          .prompt([{
              type: 'input',
              name: 'logoname',
              message: 'Enter text for logo. (no more than 3 characters)',
            },
            {
              type: 'input',
              name: 'textcolor',
              message: 'Enter a text-color keyword (OR a hexadecimal number)',
            },
            {
              type: 'list',
              name: 'chosenshape',
              message: 'Choose a shape',
              choices: [Triangle, Circle, Square],
            },
            {
              type: 'input',
              name: 'shapecolor',
              message: 'Enter a shape-color keyword (OR a hexadecimal number)',
            },
            {
              type: 'input',
              name: 'outlinecolor',
              message: 'Enter a outline-color for shape',
            }
          ])
          .then(({logoname, textcolor, chosenshape, shapecolor, outlinecolor}) => {
            //evaluates each function until matched with user input to execute desired shape
            let shape;
            switch (chosenshape) {
              case "Triangle":
                shape = new Triangle();
                break;
                case "Circle":
                shape = new Circle();
                break;
                case "Square":
                shape = new Square();
                break;
            }
            //sets new shape and shape color 
            shape.setShapeColor(shapecolor);
            shape.setOutline(outlinecolor);
            shape.setNewShape(shape);
            // shape.setTextColor(textcolor);

            //sets an error if more than 3 characters are applied 
            const text = new ShapeText();
            text.setTextError(logoname);
            //console.log(text);

            //usings temporal literal to set user input into a svg file
            const documentGenerator = ({logoname, textcolor}) => {
              return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
              ${shape.newshape}
              <text stroke-width="3" x="150" y="160" font-size ="65" fill="${textcolor}">${logoname}</text>
              </svg>`;
              } 

            //generates svg file 
            const document = documentGenerator({logoname, textcolor});
            
            // console.log(shape);
            fs.writeFile(`./Examples/logo.svg`, document, (err) => 
            err ? console.log(err) : console.log('logo created!')
       )});
}
}       

module.exports = CLI;