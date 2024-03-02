function addTwo(num: number): number{
  return num + 2;
  //return 'hello';
}


function getUpper(val: string){
  return val.toUpperCase();
}


function signUpUser(name: string, email: string, isPaid:boolean){
  isPaid? console.log(name + ' has paid his subscription through ' + email):
    console.log(name + ', please pay your monthly subscription through' + email) 
}

let loginUser = (name: string, email: string, isLoggedIn: boolean = false)=>{
  isLoggedIn ? console.log(name + " logged in with "+ email):
    console.log("Please provide your authentication through " + email);
}


let add = addTwo(5);
console.log(add);
console.log(getUpper('rojesh'))
signUpUser('Rojesh', 'shrestharojesh34@gmail.com', true)
loginUser('Rojesh', 'shrestharojesh34@gmail.com')


function getValue(myVal: number): boolean | string{
  if(myVal >  5){
    return true;
  }
  return "200 OK"
}

console.log(getValue(10));


const getHello = (s:string) : string=>{
  return s+'  ....';
}

const heros = ['thor', 'spiderman', 'ironman'];
const newArray = heros.map((hero): string =>{
  return `${hero} is my favorite`;
})

console.log(newArray);

function consoleError(errmsg: string): void{
  console.log(errmsg)
}

function handleError(errmsg: string): never{
  throw new Error(errmsg)
}

export{}