/* 
    Line No 21 not executed 
    if we press wait and after that if we click count btn
    it will not execute at that will be executed after wait has been executed .
*/
let btnwait = document.getElementById('btnwait');
let btncnt = document.getElementById('btncnt');
let divStatus = document.getElementById('divStatus');
let divVal = document.getElementById('divVal');

let count = 0 ;

btncnt.onclick = () => { 
    count++;
    console.log('count' , count  ) ; 
    divVal.textContent = count ;
    //console.log(count);
}

btnwait.onclick = () => {
    divStatus.textContent = 'WAITING' ;
    // WAIT for 5 sec 
    console.log('waiting');
    let start = Date.now();
    while ( Date.now()  < start + 5000 ){
        /* do nothing */
    }
    divStatus.textContent = 'DONE' ; 
}