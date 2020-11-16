window.onload = function(){ 
    let inpbox = document.getElementById('inpbox');
    let addbtn = document.getElementById('addbtn');
    let list  = document.getElementById('list');
    
    addbtn.onclick = () => {
        let item = document.createElement('li');
        let xBtn = document.createElement('button');
        xBtn.innerText = "❌" ;
        xBtn.onclick = (event) => {
            event.target.parentElement.remove();
        }
        
        let value = inpbox.value ;
        let textSpan = document.createElement('span');
        textSpan.innerHTML = '&nbsp;' + value ;
        
        let upbtn = document.createElement('button');
        upbtn.innerText = "⇑";
        upbtn.onclick = (event) => {
            list.insertBefore(
                event.target.parentElement , 
                event.target.parentElement.previousElementSibling
                );
        }

        let dnbtn = document.createElement('button');
        dnbtn.innerHTML = "⇓";
        dnbtn.onclick = (event) => {
            list.insertBefore(
                event.target.parentElement.nextElementSibling ,
                event.target.parentElement
                );
        }

        item.appendChild(xBtn);
        item.appendChild(textSpan);
        item.append(upbtn);
        item.append(dnbtn);
        list.appendChild(item);

    }
};