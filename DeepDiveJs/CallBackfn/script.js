let x = function(){
    console.log("i am called from inside the fn");
}

let y = function( callback ){
    console.log("do-something");
    callback();
}

y(x);

// example of call-backs 

// without callbacks 
let calc = function( num1 , num2 , calType ){
    if( calType === "add"){
        return num1 + num2 ;
    }
    else if( calType === "multiply"){
        return num1 * num2 ; 
    }
}

console.log(calc(2 ,3 , "add"));


// using call-backs 

let add = function( num1 , num2 ){
    return num1 + num2 ; 
}

let multiply = function( num1 , num2 ){
    return num1 * num2 ;
}

let doWhatever = function( num1 , num2 ){
    console.log(`Here are your two number back ${num1} , ${num2}`);
}

let cal = function( a , b  , callback){
    return callback(a , b );
}

console.log(cal(2 , 3 , doWhatever));
