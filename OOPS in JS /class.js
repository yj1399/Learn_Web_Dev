class student{ 
    constructor( name , age , cls ){
        this.name = name ;
        this.age = age ;
        this.cls = cls ;
    }
    biodata(){
        return (`Here my name is ${this.name} . I am ${this.age} year old and study in class ${this.cls}`);
    }
}


class player extends student {
    constructor( name , age , cls , game ){
        super(name , age, cls );
        this.game = game;
    }
    playerhistory(){
        return `${super.biodata()} . I plays ${this.game}`;
    }
}

let obj = new player('Yash' , 21 , 'Btech' , 'cricket'); 
console.log(obj.playerhistory());
