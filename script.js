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

var Base = 1;
var CostPerMinute = 0.20;
var CostPerMile = 1.10;
var BookingFee = 1;
var MinimumFare= 4;
var RideTime = 10;
var RideDistance = 5;
var TotalFare =  Base + (CostPerMinute* RideTime) + (CostPerMile*RideDistance)+ BookingFee;
var surgePeriod = true;
console.log (TotalFare);

function MinFare(){if (TotalFare < MinimumFare ) {
    TotalFare = MinimumFare;
    console.log ( " this is the minimum fare");
    return TotalFare;
    
} else{
    console.log(' this is the else part of that statement');
    return TotalFare;
}
}

console.log(MinFare());

// surge pricing - YAAY IT WORKS !!!
// this is 2 x the normal fair during busy periods 

function surgeFare(TotalFare){
    if (surgePeriod)
    {
     return TotalFare = TotalFare*2;
}
    } 
console.log(surgeFare(TotalFare));


// to do *********************
// add input fields for all possible variables that user has to add 
// and subsittute those variables in your function 
// add type of ride minimum costs. i.e. suv black van 
// add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro

