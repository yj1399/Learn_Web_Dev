let x = $('div');
console.log(x);

let y = $('div.item');
console.log(y);

let k = $('#one');
console.log(k[0]);
$('#one').text("New Something ");
console.log(k);


let k1 = $('#one') ;
let k2 = document.getElementById("one");
console.log(k1);
console.log(k2);
console.log($('#one') == document.getElementById("div"));