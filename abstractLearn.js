"use strict";
class food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends food {
    getCookingTime() {
        console.log("Cooking Time is ..");
    }
}
