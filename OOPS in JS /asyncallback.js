/*
API : 
1: 2s student roll no 
2: 2s -> inputh roll no age 
3: 2s gender 
*/


window.onload = function(){ 

    let btn = document.getElementById('fetch');
        btn.onclick = () => {
            getRollNo();
        }
        const getRollNo = () => {
                setTimeout( ()=>{
                console.log('API getting Roll No ');
                let roll_no = [1, 2 , 3 ,4 , 5 ];
                console.log(roll_no);
                setTimeout((rollno)=>{
                     const biodata = {
                         name : 'yash' ,
                         age : 21 
                     }
                     console.log(`My name is ${biodata.name} and I am ${biodata.age} year old and my roll no is ${rollno}`);

                     setTimeout(()=>{
                         biodata.gender = 'male' ; 
                        console.log(`My name is ${biodata.name} and I am ${biodata.age} year old and my roll no is ${rollno} and my gender is ${biodata.gender}`);
                     } , 2000 ) ; 

                } ,2000 , roll_no[1] ) ; 

            } , 2000 ) ; 
        }

};

