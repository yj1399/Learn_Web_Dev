const fun2 = () => {
    setTimeout(()=>{
        console.log(`function 2 starting . it is async programming `);
    } , 3000 );
}

const fun1 = () => {
    console.log(`function 1 starting `);
    fun2();
    console.log(`function 1 ending `);
}

