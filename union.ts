let score: number | string = 'rojesh';
console.log(score)

score  = 55;
console.log(score)


type User = {
  name: string;
  id: number;
}

type Admin = {
  userName: string;
  id: number;
}

let rojesh : User | Admin = {
  name: 'rojesh',
  id: 25675
}
console.log(typeof rojesh)


rojesh = {userName:'rojesh', id: 25675}
console.log(typeof rojesh)


  // function getDbID (id: number | string){
  //   console.log(`DB Id: ${id}`);
  // }

getDbID(25675);
getDbID('ROJESH');

function getDbID (id: number | string){
  if(typeof id === 'string'){
    id = id.toLowerCase();
    console.log(id)

  }
  else
    console.log(id+2)
}

// ARRAY
const data1: number[] | string[] = []; // this says the whole array can either be all string array or all number array
const data2: (number| string) [] = [1,2,3, 'rojesh', 'shrestha'] // this says the array can be the mixture of both number and string in an array

let seatAllotment: 'aisle' | 'middle' | 'window'  