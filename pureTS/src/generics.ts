const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number):boolean | number{
  return val;
}

function identityTwo(val: any):any{
  return val;
}

function identityThree<Type>(val: Type): Type{
  return val;
}

// console.log(identityThree('rojesh'));
// console.log(identityThree(10));

function identityFour<T>(val: T): T{
  return val;
}

interface Bottle{
  brand: string,
  type: number
}

identityFour<Bottle>({brand: 'Rs', type: 1})