
/* When a fuction is defined with-in another function 
then the innner function get the scope of all the
variable which are present in local scope of outer function 
function and this is called as closure scope */

function count (){
    var initial = 1 ;
    function plus(){
        console.log(++initial);
    }
    return plus ;
}
var c =  count();
console.log(c);
c();
c();

function counter( initial ){
    var val = initial ;
    function plus(){
        console.log(++val);
    }
    return plus;
}

var c1 = counter(10);
c1();
c1();


function counter_new( val ){
    function plus(){
        console.log(++val);
    }
    return plus ;
}

var c2 = counter_new(20);
c2();
c2();


// with objects 
function createcounter( initval , deltval ){
    return {
        up(){
            initval += deltval ;
            console.log(initval);
        },
        down(){
            initval -= deltval ;
            console.log(initval);
        }

    }
}

var c = createcounter( 10 , 2 ) ; 
c.up();
c.down();
c.up();