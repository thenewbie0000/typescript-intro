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
 // private _courseCount = 1;   only accessible within the class
  protected _courseCount = 1;
  
  constructor(
    public email: string, 
    public name: string,
    private userId: number,
  ){
    this.email = email;
    this.name = name;
  }

  private deleteToken(){
    console.log("Token Deleted")
  }

  get getApplyEmail(): string{
    return `apple${this.email}`
  }

  get courseCount():number{
    return this._courseCount;
  }

  set courseCount(courseNum){
    if(courseNum < 1){
      throw new Error("Course count should be more than one")
    }

    this._courseCount = courseNum;
  }
}

class SubUser extends User{
  isFamily : boolean = true;

  changeCourseCount(){
    this._courseCount = 4;
  }


}

const rojesh = new User('rs@g.com', 'rojesh',25675);


