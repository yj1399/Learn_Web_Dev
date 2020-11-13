let btnwait = document.getElementById('btnwait');
let btncnt = document.getElementById('btncnt');
let divStatus = document.getElementById('divStatus');
let divVal = document.getElementById('divVal');

let count = 0 ;

btncnt.onclick = () => { 
    count++;
    console.log('count' , count  ) ; 
    divVal.textContent = count ;

}

btnwait.onclick = () => {
     divStatus.textContent = 'WAITING' ;
    console.log('waiting');
    setTimeout( () => {
        divStatus.textContent = 'DONE' ;
        console.log('done'); 
    } , 5000 ) ;
    
}