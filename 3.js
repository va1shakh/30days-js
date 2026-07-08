//a function return object ( factory function pattern)
// there are some functions as key value pairs and those are doing some task with the main argument passed on main function so think about closure works here
//so we must store it in outside as another variable for working closure to remember outer variable 
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    return {
        increment: () => {
            counter ++;
            return counter;
        },
        reset: () => {
            counter = init;
           return counter; 
        },
        decrement: () => {
            counter --;
            return counter;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */