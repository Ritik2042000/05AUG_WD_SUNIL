var variable = 10;

(() => {
    console.log(variable);

    variable = 20;

    console.log(variable);

})(); // IIFE function Immediately Invoked Function Expression

console.log(variable);
var variable = 30;

// 10
// 20
// 20


// in this first var variable get 10 value after iife log variable get 10 after the variable reassign to 20 value do it get 20 at last we log  