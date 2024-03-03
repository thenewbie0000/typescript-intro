function getSearchProducts<T>(products: T[]): T{
  // do db opr 
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts =<T,> (products: T[]): T =>{  // the comma is to determine that the <T> is for type in TS but not a tag in tsx
  //do db opr
  const myIndex = 5;
  return products[myIndex];
}