
// class types 

class UserClassTest{


    // getter and setter 
    
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }


    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    msg:()=> string;
    constructor(private _userName: string, private _salary: number){
        this.msg =function(){
                return `hello ${this._userName} your salary is ${this.salary}`
        }

        }
        sayMessage(){
            return `hello ${this._userName} your salary is ${this.salary}` 
        }

    

    }

    let UserOne = new UserClassTest("fatma",30000);

    console.log(UserOne);

    //Static  Properties 
class StaticTest{
    static create: number = 0;

    static getCount(): void {
        console.log(`count is ${this.create}`);
    }

}



