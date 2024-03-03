interface User{
  email : string,
  userId: number,
  googleID ?: string,
  readonly DBId: number,
  startTrial(): string,
  //startTrial: ()=> string
  getCoupon(couponName: string) : number
}

const rojesh : User = {
  email: 'rs@gmail.com', 
  userId: 1, 
  DBId: 25675,
  githubToken: 'thenewbie0000',
  startTrial: ()=>{return 'rojesh';},
  getCoupon: (name)=>{
    return name.length + 10
  },

}
interface User{
  githubToken: string
}

interface Admin extends User{       // inheritance
  role: 'db-admin' | 'manager' |  'incharge'
}

// rojesh.DBId = 012    throws error

console.log(rojesh)
console.log(rojesh.getCoupon('rojesh'))

