function person ( name , age ){
    this.name = name ;
    this.age  = age ; 
    return 10 ;
}

let p = person( "Harry Potter" , 20 ); 

// name and 
console.log("p = " , p );
console.log(name);
console.log(age);



let p1 = new person("Hermoine Granger" , 19 );

console.log(p1); 

console.log(p1.name);
console.log(p1.age);



// Objects and Inheritance in JS 


let a = { p : 10 , q : 'abcd' , r : false}

let b = Object.create(a);

let c = Object.create(b);

console.log(a.p);
console.log(b.p);

console.log(b.__proto__.__proto__ == a.__proto__);
// true 


console.log(c.__proto__.__proto__.__proto__ == a.__proto__);
//true 

console.log(c.__proto__.__proto__ == b.__proto__);
//true


// parent.isPrototypeOf(child)

console.log(a.isPrototypeOf(b));
//true
console.log(b.isPrototypeOf(a));
//false



function Person1( name , age ){
    this.name = name ;
    this.age = age ;
}
Person1.prototype.isAdult = function(){ return this.age >= 18 }

let p3 = new Person1( "Yash" , 18 );
let p4 = new Person1( "Raj" , 20 );


console.log(p3);
console.log(p4);

console.log(p3.__proto__);


console.log(p4.__proto__);

console.log(Person1.prototype);


console.log(p3.isAdult());
console.log((p4.isAdult()));
console.log(p3.isAdult);
console.log(p3.isAdult == p4.isAdult);


function Person2 ( name , age ){
    this.name = name ;
    this.age = age ;
    this.isAdult = function(){
        return this.age >= 18 ; 
    }
}

let p5 = new Person2( "Singh" , 22);
let p6 = new Person2("SSL" , 28);

console.log(p5);
console.log(p6);
console.log(p5.isAdult);
console.log(p6.isAdult);

console.log(p5.isAdult == p6.isAdult);
