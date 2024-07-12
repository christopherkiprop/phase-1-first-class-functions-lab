// Code your solution in this file!
// Return the first two drivers from the provided array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return the last two drivers from the provided array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the firstTwoDrivers and lastTwoDrivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function multiplying the fare by a given integer
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Double the fare using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Triple the fare using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects the first or last two drivers based on the provided function
  const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
  };
  
  // Exporting functions to be accessible in other modules (if needed)
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  