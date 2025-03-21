// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
};
