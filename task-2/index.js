/*************************** */
/** ES5 */

class Builder {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
}

function IntBuilder(value) {
    Builder.constructor.call(this, value);
    this.value = value;
}
IntBuilder.prototype = Object.create(Builder.prototype);
IntBuilder.prototype.constructor = Builder;

IntBuilder.prototype.plus = function (...arg) {
    let sum = 0;
    arg.forEach((elem) => {
        sum += elem; 
    })
    this.value += sum;

    return this;
}

IntBuilder.prototype.minus = function (...arg) {
    let sum = 0;
    arg.forEach((elem) => {
        sum += elem; 
    })
    this.value -= sum;

    return this;
}

IntBuilder.prototype.multiply = function (n) {
    this.value = this.value * n;

    return this;
}

IntBuilder.prototype.divide = function (n) {
    this.value = parseInt(this.value / n);

    return this;
}

IntBuilder.prototype.mod = function (n) {
    this.value = this.value % n;

    return this;
}

IntBuilder.random = function (from, to) {
    let num = Math.floor(from + Math.random() * (to + 1 - from));

    return num;
}

console.log(IntBuilder.random(10, 100));

let intBuilder = new IntBuilder(10);

console.log(intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get());




/*************************** */
/** ES6 */

class StringBuilder extends Builder{
    constructor(value) {
        super(value);
    }

    plus(...str) {
        let sum = '';
        str.forEach((elem) => {
            sum += elem; 
        })
        this.value += sum;

        return this;
    }

    minus(n) {
        this.value = this.value.substring(0, this.value.length - n);
       
        return this;
    }

    multiply(int) {
        this.value = this.value.repeat(int);
        
        return this;
    }

    divide(n) {
        let k = Math.floor(this.value.length / n);
        this.value = this.value.substring(0, k);

        return this;
    }

    remove(str) {
        let arr = [...this.value]
        arr.forEach((elem, i) => {
            if (elem === str) {
                delete arr[i];
            } else {
                return elem;
            }
        })
        this.value = arr.join('');

        return this;
    }

    sub(from, n) {
        this.value = this.value.substring(from, n);

        return this;
    }
}   

let strBuilder = new StringBuilder('Hello');

console.log(strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 2)
    .get());
