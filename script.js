// Your Uber fare is first calculated on 4 main criteria:
//     • Base (or initial) fare – A flat fee charged at the beginning of every ride
//     • Cost per minute – How much you are charged for each minute you are inside the ride
//     • Cost per mile – How much you are charged for each mile of the ride
//     • Booking Fee (Formerly ‘Safe Rides Fee’) – A flat fee to cover Uber’s ‘operating costs’ (Not included for Uber’s more luxury services like UberBlack or UberSUV)
// Here’s how Uber uses the 4 main criteria above to calculate your fare:
// Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare

//variables needed :
// var Base,CostPerMinute,CostPerMile,BookingFee,RideTime,RideDistance,TotalFare, MinimumFare;

// Base = 1;
// CostPerMinute = 0.20;
// CostPerMile = 1.10;
// BookingFee = 1;
// MinimumFare= 4;
// RideTime= function getRidetime(){ 
//     // this is not expected to work yet due to scoping it is a simple a placeholder to be cleaned up when the proper place for the function is arrived at 
//     // this function is going to be an async function that gets the total amount of time it took to complete the ride
//     return 2; };
// RideDistance = function getRideDistance(){ 
//     // this is not expected to work yet due to scoping it is a simple a placeholder to be cleaned up when the proper place for the function is arrived at 
//     // this function will be an async function that returns the total distance covered from beginning to completion of a ride.
//     return 5 ;};


// function fareCalc (){
//     //Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare
//    return TotalFare = Base+ (CostPerMinute* RideTime) + (CostPerMile*RideDistance)+ BookingFee;
// }
// console.log(fareCalc());


//************************  attempt 2 since attempt one seems unneccesarily complicated :)

var Base = 1;
var CostPerMinute = 0.20;
var CostPerMile = 1.10;
var BookingFee = 1;
var MinimumFare= 4;
var RideTime = 10;
var RideDistance = 5;
var TotalFare = Base+ (CostPerMinute* RideTime) + (CostPerMile*RideDistance)+ BookingFee;
console.log (TotalFare);

if (TotalFare < MinimumFare ) {
    console.log( MinimumFare);
} else{
    console.log( TotalFare);
}
