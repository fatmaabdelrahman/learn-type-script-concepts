"use strict";
let showMessage = true;
// Default parameters 
function showDetails(name, phone, data = "text") {
    return `${name} - ${phone} - ${data}`;
}
;
// console.log(showDetails("fatma",11111));
// Rest parameters
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 40));
// arrow functions 
const arrowFn = (num1, num2) => {
    return num1 + num2;
};
function compare(num1, num2) {
    if (num1 == num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
// void 
function test() {
    console.log("hh");
    // return "he";
}
// never 
const fail = (msg) => {
    throw new Error(msg);
    // return "hell";
};
// enum 
var level;
(function (level) {
    level[level["Kids"] = 10] = "Kids";
    level[level["Easy"] = 15] = "Easy";
    level[level["Mdium"] = 20] = "Mdium";
    level[level["Hard"] = 30] = "Hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`the Level is ${lvl} and seconds is ${15 /* level.Easy */}`);
}
// union 
let all = 100;
// insertion 
// type object 
let testObject = {
    userName: "fatma Abdelrahman",
    phone: 123,
    address: "hello again",
};
console.log(testObject);
let user = {
    id: 2,
    name: "fatma",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.name}`;
    },
    role: "admin"
};
console.log(user);
// try ts interface 
let el = document.getElementById("id");
