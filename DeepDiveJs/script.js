/* Variables in JS */
// Old Version 
var a = 10 ;
a++ ;
console.log(a);


let b = 20 ;
b++ ;
console.log(b);

/* Constant in JS */
// We can not reassign value to Constant Object / Variables

const obj = {
    k1 : "abcd",
    k2 : "efgh",
    k3 : false
};

obj.k4 = "pqrst";

console.log(obj);

const arr = [ 1 , 2 , 3 ]; 
arr.push(5);
console.log(arr);


/* Variables Scopes in JS */

/*Scope of keyword var 
var myvar = 21 ;

function alpha(){
    var myvar = 11 ;
    if( true ) {
        myvar = 33 ;
        console.log(myvar);
    }
    console.log(myvar);
}

alpha(); */

// Scope of keyboard let and constant 
// const and let have block scopes 
let var1 = 11 ;

function beta(){
    let var1 = 21 ;
    if( true ){
        let var1 = 22 ;
        if( true ){
            let var1 = 33 ;
            console.log(var1);
        }
        console.log(var1);
    }
    console.log(var1);
}

beta();


/* Pass by value and references */

// Pass by value simple example 

var quiddtichwinner = "Harry Potter" ;

function changewinner( winner ){
    console.log("Original Winner : " + winner );
    winner = "Draco Malfoy ";
    console.log("Now the winner is : " + winner);
}

console.log("The winner is " + quiddtichwinner );

changewinner(quiddtichwinner);

console.log("The winner is " + quiddtichwinner);


// In Javascript when we pass Objects , Arrays ( Non - Primitive )
// Data types then the reference is passed so if we change its value 
// then original object also get altered .


var quiddtichwinners = [ "Harry" , "Hermoine" , "Ron"] ;

function changewinners ( winners ) {
    winners[0] = "Draco";
    winners[1] = "Crabbe";
    winners[2] = "Pansy"; 
} 

console.log( "Winners are " + quiddtichwinners) ;


// Winners are Harry,Hermoine,Ron
changewinners(quiddtichwinners);

console.log("Now winners are " + quiddtichwinners);
//Now winners are Draco,Crabbe,Pansy


