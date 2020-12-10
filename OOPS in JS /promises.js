const pobj1 = new Promise((resolve , reject) => { 
    setTimeout(() => {
         let roll_no = [1 , 2 , 3 , 4 , 5 ] ;
         resolve(roll_no) ;
        // reject('Error in Communicating ') ;
    } , 2000 ) ;
});


const getBioData = (indexdata) => { 
    return new Promise (( resolve , reject ) => { 
        setTimeout( (indexdata) => { 
            let biodata = { 
                name : "Yash",
                age : 26 
            }
            resolve(` My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} year old `) ;
        } , 2000 , indexdata ) 
    }) ;

}


pobj1.then( (roll_no) => { 
    console.log(roll_no);
    return getBioData(roll_no[1]) ;
}) .then((bio) => { 
    console.log(bio);
}).catch((error) => { 
    console.log(error) ; 
})