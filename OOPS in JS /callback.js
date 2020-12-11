const perOne = (friend , perTwo) => {
    console.log(`I am talking to ${friend} . I will call you back`);
    perTwo();
}

const perTwo = () => {
    console.log(`Hey I called you back `);
}

perOne('Yash' , perTwo);


// ll