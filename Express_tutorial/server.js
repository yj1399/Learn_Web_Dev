const express = require('express') ; 

const app = express() ; 

app.use(express.urlencoded({extended : true })) ; 

app.get('/' , (req , res )=> { 
    res.send(`Server started!`) ; 
});

app.get('/greet' , (req , res ) => { 
    //console.log(req.url);
    //console.log(req.headers);
    let Person = 'Guest' ; 
    console.log(req.query.person) ; 
    if( req.query.person ) { 
        Person = req.query.person ; 
    }
    res.send(`Good Morning  ${Person}!`) ; 
})

app.post('/greet' , (req , res )=> { 
    let Person = 'Guest' ; 
    console.log(req.body.person) ; 
    if( req.body.person ) { 
        Person = req.body.person ; 
    }
    res.send(`Good Morning  ${Person}!`) ; 
})


app.get('/:city/welcome' , (req , res ) => { 
     res.send(`Welcome to city  ${req.params.city}`) ; 
})
app.get('/form' , (req , res ) => { 
    res.sendFile(__dirname + '/file/form.html') ; 
})
 


app.listen(4444 , ()=> {
    console.log(`Server started at port 8000 : http://localhost:4444`); 
}) ;