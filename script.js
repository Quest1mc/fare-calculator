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
//var carType = "normal";
var totalFareFinal = 0;




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


var totalFareFinal = 0;

function minFare() {

    if (totalFareFinal >= minimumFare) {
        //totalFareSum > minimumFare
        console.log(totalFareFinal + ' is greater than ' + minimumFare);
        totalFareFinal = totalFareSum;
        console.log(totalFareFinal);

    } else {
        console.log(totalFareFinal + ' is less than ' + minimumFare);

        totalFareFinal = minimumFare;
        console.log(totalFareFinal);
    }
    return totalFareFinal;
}

var totalFareFinal = minFare();

// // surge pricing - working
// // this is 2 x the normal fair during busy periods 
function surge() {
    var SurgePeriod = document.getElementById('SurgePeriod');
    SurgePeriod.addEventListener('change', SurgeHandler);
}

function SurgeHandler(totalFareFinal) {
    if (SurgePeriod.checked) {
        totalFareFinal = minFare() * 2;
        console.log(totalFareFinal);
        //console.log ('surge is clicked');

        //     // Checkbox is checked..
    } else {
        //     // Checkbox is not checked..
        totalFareFinal = minFare();
        console.log(totalFareFinal);
        //console.log('Surge is not clicked');
    }
    return totalFareFinal;
}
var totalFareFinal = surge();
console.log(totalFareFinal);

// RIDE TYPE NOT WORKING PROPERLY  
// look up the proper use of radio buttons
function rideType() {
    var CarType = document.querySelector('#carType');
    if (CarType.checked) {
        totalFareFinal += 1;
        console.log("normal is checked");
        console.log(totalFareFinal);

    } else {
        totalFareFinal = totalFareFinal;
        console.log(" Something OTHER THAN normal is checked");
    }
    return totalFareFinal;

}
var totalFareFinal = rideType();
console.log(totalFareFinal);




//console.log(totalFareFinal);

//console.log(totalFareFinal);

function fareAmount() {
    return document.querySelector('#fareAmount').innerText = totalFareFinal;
}


// // // to do *********************
// // // add input fields for all possible variables that user has to add 
// // // and subsittute those variables in your function 
// // // add type of ride minimum costs. i.e. suv black van 
// // // add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// // // eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro


function calculateAndDisplayTotalFare() {
    // calculate total fare (without modifiers)
    totalFare();
    console.log(totalFare());
    // check if it's below a certain value => minimumfare
    minFare();
    console.log(totalFareFinal);

    // apply ridetype
    rideType();
    console.log(rideType());
    // apply surge
    surge();
    console.log(typeof surge());


    //display on the page
    fareAmount();
}