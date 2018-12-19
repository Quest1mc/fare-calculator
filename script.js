// Your Uber fare is first calculated on 4 main criteria:
//     • Base (or initial) fare – A flat fee charged at the beginning of every ride
//     • Cost per minute – How much you are charged for each minute you are inside the ride
//     • Cost per mile – How much you are charged for each mile of the ride
//     • Booking Fee (Formerly ‘Safe Rides Fee’) – A flat fee to cover Uber’s ‘operating costs’ (Not included for Uber’s more luxury services like UberBlack or UberSUV)
// Here’s how Uber uses the 4 main criteria above to calculate your fare:
// Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare

//variables needed :
// var Base,CostPerMinute,CostPerMile,BookingFee,RideTime,RideDistance,TotalFare, MinimumFare;




//************************  attempt 2 since attempt one seems unneccesarily complicated :)

var base = document.getElementById('Base').value;
var costPerMinute =document.getElementById('CostPerMinute').value;
var costPerMile =document.getElementById('CostPerMile').value;
var bookingFee = 1;
var minimumFare= 4;
var rideTime = document.getElementById('RideTime').value;
var rideDistance = document.getElementById('RideDistance').value;
var surgePeriod = document.getElementById('SurgePeriod').value;
var totalFareFinal = 0;

function totalFare(){  return base + (costPerMinute* rideTime) + (costPerMile*rideDistance) + bookingFee;
 }
//this console.log works 
//console.log (totalFare());

function minFare(){if (totalFare ()< minimumFare ) {
    totalFareFinal = minimumFare;
    console.log ( totalFareFinal);
    return totalFareFinal;
    
} else{
    console.log(' this is the else part of that statement');
    return totalFareFinal = totalFare() ;
}
}
function rideType (){
    // if statement that returns a new value based on ride type 
}

console.log(minFare());

// surge pricing - YAAY IT WORKS !!!
// this is 2 x the normal fair during busy periods 

function surgeFare(totalFareFinal){
    if (surgePeriod)
    {
     return totalFareFinal = totalFare()*2;
}
    } 
console.log(surgeFare(totalFareFinal));
//console.log (TotalFare + '2nd');
//document.getElementById("Totalfare").innerText(TotalFare);
document.querySelector('#fareAmount').innerText = totalFareFinal;


// to do *********************
// add input fields for all possible variables that user has to add 
// and subsittute those variables in your function 
// add type of ride minimum costs. i.e. suv black van 
// add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro

