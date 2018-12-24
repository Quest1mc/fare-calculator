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

var minimumFare = 4;
var carType = "normal";




function totalFare() {
    var base = parseFloat(document.getElementById('Base').value);
    var costPerMinute = parseFloat(document.getElementById('CostPerMinute').value);
    var costPerMile = parseFloat(document.getElementById('CostPerMile').value);
    var bookingFee = 1;
    var rideTime = parseFloat(document.getElementById('RideTime').value);
    var rideDistance = parseFloat(document.getElementById('RideDistance').value);
    

    // console.log(typeof base, typeof costPerMile, typeof costPerMinute, typeof rideDistance, typeof rideTime)

    var totalFareSum = (base + (costPerMinute * rideTime) + (costPerMile * rideDistance) + bookingFee);
    console.log(typeof totalFareSum); // number
    console.log(totalFareSum);

    return totalFareSum; 
}

var totalFareSum = totalFare();

console.log(totalFareSum);
var totalFareFinal = 0;

function minFare() {
    
   if (totalFare() >= minimumFare) {
    //totalFareSum > minimumFare

        console.log(totalFare()+ ' is greater than ' + minimumFare);
         return totalFareFinal = totalFareSum;
    } else {
        console.log(totalFare() + ' is less than '+ minimumFare);
        return  totalFareFinal = minimumFare;
    }
}
console.log( totalFareFinal);
var totalFareFinal = minFare();
console.log( totalFareFinal);

function rideType() {
    //*NOTYET working if statement that returns a new value based on ride type 
    if (carType === "normal"){
        return totalFareFinal+ 1;
    }
    else { 
        return totalFareFinal;
    }
}

//console.log(minFare());

// surge pricing - YAAY IT WORKS !!!
// this is 2 x the normal fair during busy periods 
function surge () {
    SurgePeriod.addEventListener('change', function () {
    if (this.checked) {
        totalFareFinal = totalFare() * 2;
            console.log('true');
        return totalFareFinal;
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
        console.log('false');
        return totalFareFinal;
    }
});
}




//var totalFareFinal= surgeFare();
// console.log(totalFareFinal);

function fareAmount() {
    document.querySelector('#fareAmount').innerText = totalFareFinal;
}


// // to do *********************
// // add input fields for all possible variables that user has to add 
// // and subsittute those variables in your function 
// // add type of ride minimum costs. i.e. suv black van 
// // add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// // eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro


function calculateAndDisplayTotalFare(){
    // calculate total fare (without modifiers)
    totalFare();
    console.log(totalFareSum);
    // check if it's below a certain value => minimumfare
    minFare();
    console.log(totalFareFinal);
    
    // apply surge
    surge();
    console.log(surge());
    // apply ridetype
    rideType();
    console.log (rideType());
    
    
    // display on the page
    fareAmount();
}