var score = 'rojesh';
console.log(score);
score = 55;
console.log(score);
var rojesh = {
    name: 'rojesh',
    id: 25675
};
console.log(typeof rojesh);
rojesh = { userName: 'rojesh', id: 25675 };
console.log(typeof rojesh);
// function getDbID (id: number | string){
//   console.log(`DB Id: ${id}`);
// }
getDbID(25675);
getDbID('rojesh');
function getDbID(id) {
    if (typeof id === 'string') {
        id = id.toLowerCase();
        console.log(id);
    }
    else
        console.log(id + 2);
}
