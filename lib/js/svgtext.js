
class ShapeText {
    constructor(logoname){
        this.logoname = logoname;
    }
    render() {
       return `${logoname}`
    }
    setTextError(logoname){
        if (logoname.length > 3){
             throw new Error(`must be less than 3 characters!`);
        }
        this.logoname = logoname;
    }
}


module.exports = ShapeText;