// IIFE - Immediately Invoked Function Expression 


// Normal Function Defination and call 
function sayHello(){
    console.log("Hello");
}

sayHello(); 

// We can also call the fucntion when it is defined 

( function sayBye(){
    console.log("Bye");
})();

// OR 


( function (){
    console.log("Bye");
})();

// Helps in Creating local scope with-out populating global scope 

(function () {
    var a = 120 ;
    var b = 10 ;
    console.log( a + b ) ; 
})();

// a and b not defined here 


(function( l , p , r , s ){
    l("3^4 = " + p(3 ,4));
    l("4^3 = " + p(4 , 3 ));
    l("root(2) = " + r(2));
    l("sin(10) = " + s(10));
})(console.log , Math.pow, Math.sqrt , Math.sin);


for( var i = 0 ; i<10 ; i++ ){
    setTimeout(function () {
        console.log(i); 
    } , 100) ;
}
// print 10 ( ten - times ) 

for( var i = 0 ; i<10 ; i++ ){
    (function(j){
        setTimeout(function(){
            console.log(j);
        } , 100 ) ; 
    })(i); 
}

