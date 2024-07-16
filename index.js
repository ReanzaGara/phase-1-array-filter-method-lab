// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()));
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(driver => driver.startsWith(string));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }