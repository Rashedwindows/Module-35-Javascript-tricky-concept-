/* 
    1..variable not assigned
    2..function but didn't write return;
    3..just wrote return but didn't return anything
    4..parameter that isn't passed
    5..proparty doesn't exist in an object
    6..accessing array element out of range
    7..accessing deleted array element
    8..explicitly set value to undefined
    

*/

let a;

// console.log(a);


function first(x,y){

    const sum = x + y ;
    
}

const result = first(23,91);

// console.log(result)



function add(x,y){

    const multiply = x * y;

    return multiply;
}

const resultMultiply = add();

console.log(resultMultiply)