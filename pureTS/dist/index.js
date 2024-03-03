"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = 'Kathmandu';
//   constructor(email: string, name: string){
//     this.email = email;
//     this.name = name;
//   }
// }
// rojesh.city = 'Kathmandu'
// rojesh.name
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount = 1;   only accessible within the class
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getApplyEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const rojesh = new User('rs@g.com', 'rojesh', 25675);
