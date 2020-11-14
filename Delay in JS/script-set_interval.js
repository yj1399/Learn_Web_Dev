var interval_id ;
var run_count = 0 ; 

function sayHello(){
    run_count++;
    if( run_count > 5 ) {
        clearInterval(interval_id);
    }
    console.log(run_count);
}

console.log("And the waiting starts from here...");
interval_id = setInterval( sayHello , 1000 ) ; 