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