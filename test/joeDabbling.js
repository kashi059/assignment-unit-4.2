console.log( 'js' )

const seatsInCar = 5;
let passengers = [];
let tankFull = false;


fuction enoughSeats();{
    console.log('in enoughSeats');
    if(seatsInCar>= passengers.length ){
        return true';
} 
    else {
    return false;
} // end enoughSeats
}
//end function

function getInCar(nameOfPassenger ) {
    console.log('getInCar', nameOfPassenger);
    // push this new passenger into our passengers array
    passengers.push( nameOfPassenger);
    return passengers;
}
function readyForRoadTrip(){
    if (enoughSeats() && tankFull ){
        return true;
}
    else {
        return false;
    }
}


getInCar('Alex');
getInCar('Pinky');
getInCar('Kirby');
getInCar('Joe');

console.log(enoughSeats());
