function someasyncTask( callback ) {
    console.log(`Begning of the task `) ; 
     setTimeout( function() { 
         console.log(`End of the task `) ; 
         callback();
     } , 3000 ) ; 
}


let somePromise = function() { 
    return new Promise( function( resolve , reject ) {
        someasyncTask(resolve) ;  
    })
}

somePromise().then(function() {
     console.log(`After the task `) ; 
})
