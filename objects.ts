const User = {
  name: "Rojesh",
  email: "shrestharojesh34@gmail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
let newUser = {name: "rojesh", isPaid: true, email: 'rs@g.com'}
// createUser({name: "rojesh", isPaid: true, email: 'rs@g.com'}); THROWS ERROR
createUser(newUser);

function createCourse(): {name: string, price: number}{
  return {name: 'typescript', price: 500}
}


export{}