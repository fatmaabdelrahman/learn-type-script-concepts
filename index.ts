let showMessage = true;

// Default parameters 
function showDetails(name:string,phone:number,data:string = "text"){

return `${name} - ${phone} - ${data}`;
}

;

// console.log(showDetails("fatma",11111));

// Rest parameters
function addAll(... nums:number[]){

    let result = 0;
    nums.forEach((num)=> result += num);
    return result;

}

console.log(addAll(10,20,30,40));

// arrow functions 
const arrowFn = (num1:number , num2:number)=>{
        return num1+num2;
};


// literal types 
type numbers = 0|1 | -1;

function compare(num1:number, num2:number) :numbers{
    if(num1 == num2){
        return 0;
    } else if(num1 > num2){
        return 1;
    }else{
        return -1;
    }
}
console.log(compare(20,20));


// void 
function test() :void{

console.log("hh");
// return "he";
}


// never 
const fail = (msg:string)=>{

    throw new Error(msg);
    // return "hell";
    
}


// enum 

const enum level  {
    Kids = 10,
    Easy = 15,
    Mdium = 20,
    Hard = 30,

}

let lvl : string = "Easy";

if(lvl === "Easy"){
    console.log(`the Level is ${lvl} and seconds is ${level.Easy}`);
}



// union 

let all : number | string = 100;


// insertion 



// type object 

let testObject :{
    userName:string,
    phone:number,
    address:string,
}
=
{
    userName:"fatma Abdelrahman",
    phone:123,
    address:"hello again",
}


console.log(testObject);



// interface 

interface  User{

    id:number,
    name:string,
    country:string,
    sayHello():string
}

interface moderator extends User{
    role :string |number
}

let user:moderator = {
    id: 2,
    name:"fatma",
    country:"Egypt",
    sayHello(){
        return `Hello ${this.name}`
    },
    role: "admin"
}

console.log(user);


// try ts interface 

let el = document.getElementById("id") as HTMLElement;

