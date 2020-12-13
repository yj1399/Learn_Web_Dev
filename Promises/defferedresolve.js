
let somePromise = function() { 
    return new Promise( function( resolve , reject ) {
        console.log(`Download Started `) ; 
        setTimeout(function() { 
            console.log(`Download Completed `) ; 
            resolve() ; 
        } , 3000 ) ; 
    })
}


let somePromiseObject = somePromise() ; 

setTimeout( ()=> { 
    somePromiseObject.then(()=> { 
        console.log(`After the Download `)   
    })
} , 5000 )