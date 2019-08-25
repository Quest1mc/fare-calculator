
This was built in JavaScript & HTML with minimal CSS
Mostly to show off Javascript and logic applied to solving a problem.

![alt text](https://github.com/Quest1mc/fare-calulator/blob/master/Screenshot-Farecalculator.png "Screenshot FareCalulator SPA")


Your Uber fare is first calculated on 4 main criteria:
    • Base (or initial) fare – A flat fee charged at the beginning of every ride
    • Cost per minute – How much you are charged for each minute you are inside the ride
    • Cost per mile – How much you are charged for each mile of the ride
    • Booking Fee (Formerly ‘Safe Rides Fee’) – A flat fee to cover Uber’s ‘operating costs’ (Not included for Uber’s more luxury services like UberBlack or UberSUV)
Here’s how Uber uses the 4 main criteria above to calculate your fare:
Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare



// surge pricing - YAAY IT WORKS !!!
// this is 2 x the normal fair during busy periods 
// to do *********************
// add input fields for all possible variables that user has to add 
// and subsittute those variables in your function 
// add type of ride minimum costs. i.e. suv black van 
// add surge  and refine the algorithm - GO BACK TO THE USER STORY !
// eventually use google matrix api to calculate distances https://developers.google.com/maps/documentation/distance-matrix/intro
