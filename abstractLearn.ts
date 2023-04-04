abstract class food{
    constructor( public title : string){}
        abstract getCookingTime() : void;
    
}

class Pizza extends food {
    getCookingTime(): void {
        console.log("Cooking Time is ..");
    }
}