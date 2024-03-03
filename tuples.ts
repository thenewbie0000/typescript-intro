// SPECIALIZED ARRAY

const user : (string | number)[] = [1, 'rs']    // Here no specific order in which the string or number is placed in the array

let tuples: [string, number, boolean] 
tuples = ['ro', 1, true ]; // Here is a strong order of array and cannot have more than specifies members

type User = [number, string]

const newUser : User = [25675, 'rojesh']
newUser[1] = 'rs'
newUser.push(45);   // by doing this we can break the rigid rules of tuples
console.log(newUser)
export {}