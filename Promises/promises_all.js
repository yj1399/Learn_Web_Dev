function download( url ) { 
    return new Promise ( function(resolve , reject ) { 
         if( !url.startsWith('http') ) { 
              reject (new Error(`Download can not be done `) ) ; 
         }else {
             console.log(`Download Started at ${url} `) ;  
             setTimeout(()=>{ 
                  let fileName = url.split('/').pop() ; 
                  console.log(`Download Complete of file ${fileName}`) ; 
                  resolve(fileName) ; 
             } , 3000 )
         }
    })
}

function resize(fileName) { 
   return new Promise ( function ( resolve , reject ) { 
        if( !fileName.endsWith('.png') ){
            reject (new Error(`Cannot Resize . It is not a png file`)) ; 
        }else {
            console.log(`Resizing of File Started `) ;  
            setTimeout(()=> { 
                console.log(`Resizing Done `) ; 
                let resizedFileName = fileName.split(".")[0] + "-resized.png" ; 
                resolve(resizedFileName) ; 
            } , 3000) 
        }
   } )
}


function upload( resizedFileName ) { 
    return new Promise ( function ( resolve , reject )   { 
        console.log(`Upload Started `)
        setTimeout(()=> { 
             let uploadurl =  `https://imgur.com/${resizedFileName}` ; 
             console.log(`Upload done !` )
             resolve(uploadurl) ; 
        } , 3000 ) ;  
    } )
} 

// promises are executed parrallely  

Promise.all([
    download('https://imgur.com/logo.png'),
    download('https://imgur.com/pic.png') , 
    download('https://imgur.com/banner.png')
]).then(function(downloadvalues){ 
   return Promise.all(downloadvalues.map(resize)) ;
}).then(function(resizeFiles) { 
    return Promise.all(resizeFiles.map(upload)) ; 
}).then(function(uploadedfiles) { 
     console.log( uploadedfiles ) ;  
})

