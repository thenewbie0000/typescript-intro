interface Database{
  userName: string,
  connection: string,
  password: string
}

function anotherFunction <T, U extends Database>(valOne:T, valTwo: U): object{
  return{
    valOne, valTwo
  };

}

anotherFunction(3, {userName: 'rojesh', connection: 'wifi', password: 'rs123'});


interface Quiz{
  name: string,
  type: string
}

interface Course{
  name: string,
  author: string,
  subject: string
}

class Sale<T>{
  public cart: T[] = [];

  addToCart(products: T){
    this.cart.push(products)
  }
}