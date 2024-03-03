enum SeatChoice{    // putting const infront of enum will generate lesser JS code as it will only generate code as per the use later down the code
  AISLE = 25675,    // default its values is 0 and subsiquent number will be ++ or you can specifically assign values
  // but if we do AISLE = 'AISLE'then you have to assign each of them individually 
  MIDDLE,
  WINDOW,
  FOURTH
}

const rsSeat = SeatChoice.AISLE;