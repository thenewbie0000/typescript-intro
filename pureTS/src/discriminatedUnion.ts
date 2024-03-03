interface Circle{
  kind: 'circle',
  radius: number
}

interface Square{
  kind: 'sqaure',
  side: number
}

interface Rectangle{
  kind: 'rectangle',
  length: number,
  width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }

  // return shape.side ** 2;
}


function getArea(shape: Shape){
  switch(shape.kind){
    case 'circle':
      return Math.PI * shape.radius ** 2;
    
    case 'sqaure':
      return shape.side ** 2;

    case 'rectangle':
      return shape.length * shape.width
    
    default: 
      const _defaultForShape: never = shape
      return _defaultForShape
  }
}