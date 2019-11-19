var assert = require('assert')
var calculator = require('../PetiteAppli.js')

testError = function(){
    calculator.add(1, 2, '4');
}

describe('Calculator', function(){
    describe('Add', function (){
        it('Should add three values', function(){
            assert.equal(calculator.add(1,2,3,4), 10);
        });
        it('Should hold negative values', function(){
            assert.equal(calculator.add(1,-2,3,4), 6);
        });
        /*it('Should throw an error cause NaN', function(){
            assert.throws(testError, Error, "Error Thrown");
        })*/
    })
    describe('Multiplication', function (){
        it('Should multiply three values', function(){
            assert.equal(calculator.multiplication(4,4, 10), 160);
        });
        it('Should Multiply negatives numbers', function(){
            assert.equal(calculator.multiplication(-5, -5), 25);
        })
    })
})