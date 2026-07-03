//count number in closure environement has the ability to remember outer variable
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};


const counter = createCounter(10);
counter();
counter();
counter();
