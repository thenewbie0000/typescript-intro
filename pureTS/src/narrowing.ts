interface User{
  name: string,
  email: string
}

interface Admin{
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
  if("isAdmin" in account){
    console.log(`${account} is admin`);
    return account.isAdmin
  }
  else{
    console.log(`${account} is User`);
  }
}


function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    console.log(typeof x)
  } else {
    console.log(x.toUpperCase());  
    console.log(typeof x)          
  }
}

logValue(new Date());



type Fish = {swim(): void};
type Bird = {fly(): void};

function isFish(pet: Bird | Fish) : pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "fish food"
  }else{
    pet 
    return "bird food"
  }
}