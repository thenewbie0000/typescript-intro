const myArray1: string[] = []

myArray1.push('Shaktiman')
myArray1.push('Chandraman')

//const myArray2: number[]= []
const myArray2: Array<number> = []
myArray2.push(1);
myArray2.push(2);

// union 
let myArray3 : (number | string)[] = []
myArray3 = myArray2.map(String).concat(myArray1)

console.log(myArray1)
console.log(myArray2)
console.log(myArray3)

type User = {
  name: string;
  isActive: boolean;
}

const allUsers : User[] = []
allUsers.push({name: 'rojesh', isActive: true})
allUsers.push({name: "", isActive: false})

console.log(allUsers);


const MLModels: number[][] = [
  [255,255,255],
  [0,0,0]
]

console.log(MLModels)

export {}