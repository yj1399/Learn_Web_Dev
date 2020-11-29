const fun2 = () => {
    console.log(`Starting function 2 `);
}

const fun1 = () => {
    console.log(`Starting function 1 `) ;
    fun2();
    console.log(`Ending function 1 `) ;
}
// Synchronus programming 

