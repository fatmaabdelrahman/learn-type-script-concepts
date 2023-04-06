class Player {
    constructor(public name: string){}

    attack() : void{
        console.log("I am attacking Now");
    }
}

class Amazon extends Player{
    constructor(public name: string,public spears: number){
        super(name);
    }
    attack() : void{
        super.attack();
    }
}