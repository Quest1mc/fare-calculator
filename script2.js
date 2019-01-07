// Your Uber fare is first calculated on 4 main criteria:
//     • Base (or initial) fare – A flat fee charged at the beginning of every ride
//     • Cost per minute – How much you are charged for each minute you are inside the ride
//     • Cost per mile – How much you are charged for each mile of the ride
//     • Booking Fee (Formerly ‘Safe Rides Fee’) – A flat fee to cover Uber’s ‘operating costs’ (Not included for Uber’s more luxury services like UberBlack or UberSUV)
// Here’s how Uber uses the 4 main criteria above to calculate your fare:
// Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare



// surge pricing - YAAY IT WORKS !!!
// this is 2 x the normal fair during busy periods 
// to do *********************
// add input fields for all possible variables that user has to add 
// and subsittute those variables in your function 
// add type of ride minimum costs. i.e. suv black van 
// add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro

// Config variables


const BASE_FARE_EURO = 1
const BOOKING_FEE_EURO = 1
const COST_PER_MINUTE_EURO = 2
const COST_PER_MILE_EURO = 1
const MIN_FARE_EURO = 4
const SURGE_MULTIPLIER = 2


function calculateBaseFare(time, distance){ // parameters (placeholders)
    const baseFare = BASE_FARE_EURO
    const bookingFee = BOOKING_FEE_EURO 
    const costPerMinute = COST_PER_MINUTE_EURO
    const costPerMile = COST_PER_MILE_EURO

    return baseFare + ( costPerMinute * time ) + ( costPerMile * distance ) + bookingFee
}

function calculateMinFare(fare){ // number
    const minFare = MIN_FARE_EURO
    if (fare >= minFare) {
        return fare
    }
    
    return minFare
}

function calculateSurge(fare, surgeActive){
    const surgeMultiplier = SURGE_MULTIPLIER
    if(surgeActive === true){
        return fare * surgeMultiplier
    } 
    return fare
}

console.log(calculateSurge(11, false))

function inputFareAmount(fare) {
    return document.querySelector('#fareAmount').innerText = fare;
}

function fareCalculator(){
    const timeInRide = parseFloat(document.getElementById('RideTime').value)
    const rideDistance = parseFloat(document.getElementById('RideDistance').value)
    const surgeActive = document.getElementById('SurgePeriod').checked

    const baseFare = calculateBaseFare(timeInRide, rideDistance) // pass in timeInRide and rideDistance as arguments
    const surgeFare = calculateSurge(baseFare, surgeActive)
    const finalFare = calculateMinFare(surgeFare)
    const fareAmount = inputFareAmount(finalFare)
    console.log(finalFare)
    return fareAmount
}

// todo: 
// surge
// ridetype
// console.log(fareCalculator())


