const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (arrayofDrivers){
    return (arrayOfDrivers.slice(0,2));
}
const returnLastTwoDrivers = function (arrayofDrivers) {
    return (arrayOfDrivers.slice (2));
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier (n) {
    return (function (f) {
        return (f*n);
    });
}
const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);


function selectDifferentDrivers (arrayOfDrivers,returnFirstTwoDrivers) {
       return (returnFirstTwoDrivers ());
}
function selectDifferentDrivers (arrayOfDrivers,returnLastTwoDrivers) {
    return  (returnLastTwoDrivers());
}
