var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 25675] = "AISLE";
    // but if we do AISLE = 'AISLE'then you have to assign each of them individually 
    SeatChoice[SeatChoice["MIDDLE"] = 25676] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 25677] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 25678] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var rsSeat = SeatChoice.AISLE;
