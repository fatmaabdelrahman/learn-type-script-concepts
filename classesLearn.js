"use strict";
// class types 
class UserClassTest {
    // getter and setter 
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    constructor(_userName, _salary) {
        this._userName = _userName;
        this._salary = _salary;
        this.msg = function () {
            return `hello ${this._userName} your salary is ${this.salary}`;
        };
    }
    sayMessage() {
        return `hello ${this._userName} your salary is ${this.salary}`;
    }
}
let UserOne = new UserClassTest("fatma", 30000);
console.log(UserOne);
//Static  Properties 
class StaticTest {
    static getCount() {
        console.log(`count is ${this.create}`);
    }
}
StaticTest.create = 0;
