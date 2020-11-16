let p2 = document.getElementsByClassName('para')[1]

p2.innerText = " This is <b> new </b> hmtl"

p2.setAttribute('contenteditable' , true );

console.log(p2.outerHTML);

let paracollection = document.getElementsByTagName('p');

console.log(paracollection);


let i = document.getElementById('inpbox');


i.value = "Linkedin ";

let btn = document.getElementById('btn');

btn.innerText = "BOLD" ;


// Traverse if we donot have any id of li element 

let tomato = document.getElementsByTagName('ol')[1].children[1]
let banana = tomato.parentElement.parentElement.previousElementSibling.children[0].children[2];
console.log(tomato);
console.log(banana);


// Remove and Replace in DOM 


// to remove :
tomato.parentElement.remove();
console.log(tomato.parentElement.parentElement);

let Junkfood = document.getElementsByTagName('ul')[0].children[3]

Junkfood.appendChild(tomato.parentElement);


let num = document.getElementById('num');
let print = document.getElementById('print')
let list = document.getElementById('list')
let num1 = document.getElementById('num1');
let print1 = document.getElementById('print1')
let list1 = document.getElementById('list1')


print.onclick = () => {
     let start = new Date().getTime();
     let N = parseInt(num.value);
     console.log(N);
     for( let i=1 ; i<= N ; i++){
         list.innerHTML += '<li>' + i + '</li>' 
     }
     let end = new Date().getTime();
     para1.innerHTML += (end - start) + '</p>';
}

/*print1.onclick = () => {
    let start = new Date().getTime();
    let N = parseInt(num1.value);
    console.log(N);
    let listHTMl = "";
    for( let i=1 ; i<= N ; i++){
        listHTMl += '<li>' + i + '</li>' 
    }
    list1.innerHTML = listHTMl ; 
    let end = new Date().getTime();
    para2.innerHTML += (end - start) + '</p>';
}

*/
print1.onclick = () => {
    let start = new Date().getTime();
    let N = parseInt(num1.value);
    for( let i=1 ; i<=N ; i++){
        let item = document.createElement('li');
        item.innerText = i ; 
        list1.appendChild(item);
    }
}
