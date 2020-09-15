/*************************** */
/** ES5 */
function Builder (int) {
    this.int = int;
}

Builder.prototype.get = function () {
    console.log(this.int);
    return this;
}


function IntBuilder(int) {
    Builder.call(this, int);
}
IntBuilder.prototype = Object.create(Builder.prototype);
IntBuilder.prototype.constructor = Builder;

IntBuilder.prototype.plus = function (...arg) {
    let sum = 0;
    [...arg].forEach((elem) => {
        sum += elem; 
    })
    this.int += sum;

    console.log(this.int);
    return this;
}

IntBuilder.prototype.minus = function (...arg) {
    let sum = 0;
    [...arg].forEach((elem) => {
        sum += elem; 
    })
    this.int -= sum;

    console.log(this.int);
    return this;
}

IntBuilder.prototype.multiply = function (n) {
    this.int = this.int * n;

    console.log(this.int);
    return this;
}

IntBuilder.prototype.divide = function (n) {
    this.int = parseInt(this.int / n);

    console.log(this.int);
    return this;
}

IntBuilder.prototype.mod = function (n) {
    this.int = this.int % n;

    console.log(this.int);
    return this;
}

IntBuilder.random = function (from, to) {
    this.int = Math.floor(from + Math.random() * (to + 1 - from));

    console.log(this.int);
    return this;
}

IntBuilder.random(10, 100);

let intBuilder = new IntBuilder(10);

intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get();




/*************************** */
/** ES6 */
class Builder {
    constructor(str) {
        this.str = str;
    }
    get() {
        console.log(this.str);
        return this;
    }
}


class StringBuilder extends Builder{
    constructor(str) {
        super(str);
        this.str = str;
    }

    plus(...str) {
        let sum = '';
        str.forEach((elem) => {
            sum += elem; 
        })
        this.str = this.str + sum;

        console.log(this.str);
        return this;
    }

    minus(n) {
        this.str = this.str.substring(0, this.str.length - n);
       
        console.log(this.str);
        return this;
    }

    multiply(int) {
        this.str = this.str.repeat(int);
        
        console.log(this.str);
        return this;
    }

    divide(n) {
        let k = Math.floor(this.str.length / n);
        this.str = this.str.substring(0, k);

        console.log(this.str);
        return this;
    }

    remove(str) {
        let arr = [...this.str]
        arr.forEach((elem, i) => {
            if (elem === str) {
                delete arr[i];
            } else {
                return elem;
            }
        })
        this.str = arr.join('');

        console.log(this.str);
        return this;
    }

    sub(from, n) {
        this.str = this.str.substring(from, n);

        console.log(this.str);
        return this;
    }
}   

let strBuilder = new StringBuilder('Hello');

strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 2)
    .get();