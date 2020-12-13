function download( url ) { 
     return new Promise ( function(resolve , reject ) { 
          if( !url.startsWith('http') ) { 
               reject (new Error(`Download can not be done `) ) ; 
          }else {
              console.log(`Download Started `) ;  
              setTimeout(()=>{ 
                  console.log('Download Complete') ; 
                   let fileName = url.split('/').pop() ; 
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

/*download("http://cb.lk/logo.png").then( (fileName) => { 
    resize(fileName).then((resizedFileName) => {
        setTimeout(()=>{
            console.log(`Resized File name is : ${resizedFileName}`) ; 
        } , 3000 ) ; 
    })
}) */

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
/* download("http://cb.lk/logo.png").then(resize).then((resizedFileName) => { 
    console.log(`Resized File name is : ${resizedFileName}`) ; 
}) */

download("http://cb.lk/logo.png").then(resize).then(upload).then((uploadurl) => {
     console.log(`File Uploaded at url ${uploadurl}`) ; 
})