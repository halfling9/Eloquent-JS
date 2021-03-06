function some(array, condition){
    var check = false;
    for(var i = 0; i < array.length; i++){
        check = condition(array[i]);
        if(check === true)
            return true;
    }
    return check;
}

function every(array, condition){
    for(var i = 0; i < array.length; i++){
        if(!condition(array[i]))
            return false;
    }
    return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
