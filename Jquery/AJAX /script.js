$(()=>{

    let people = $('#people');
    let page = 1 ; 
    $('#fetch').click(()=>{
        $.get(`https://reqres.in/api/users?page=${page}` , (data)=>{
            page++;
            for( let p of  data.data ){
                people.append(`<li> 
                <img width = "100" src ="${p.avatar}">
                ${p.first_name} ${p.last_name}
                </li>`)
            }
        })
    })
})