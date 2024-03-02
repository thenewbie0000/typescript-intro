type User = {
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User{
  return {name: "", email:"", isActive: false};
}

createUser({name: "", email:"", isActive: false})

type Customer = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails ?: number;    // optional so no need to put data for this varibale
}

let myCustomer : Customer = {
  _id: '25675',
  name: 'Rojesh',
  email: 'shrestharojesh34@gmail.com',
  isActive: true,
}

myCustomer.email = 'rs@gmail.com'
// myCustomer._id = '54545'   CANNOT BE MODIFIED
console.log(myCustomer);


type cardNumber = {
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
};

let creditCard: cardDetails = {
  cardNumber: '545654654',
  cardDate: '2024/03/02',
  cvv: 2080,
}

console.log(creditCard)

export {}