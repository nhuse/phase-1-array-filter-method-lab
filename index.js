// Code your solution here
function findMatching(arr, str) {
    let filteredArr = arr.filter(function (driver) {return driver.toLowerCase() === str.toLowerCase()});
    return filteredArr;
}

function fuzzyMatch(arr, str) {
    let filteredDrivers = arr.filter(function (driver) {return driver.startsWith(str)});
    return filteredDrivers;
}

function matchName(arr, str) {
    let namedDriver = arr.filter(function (driver) {return (driver.name === str)});
    return namedDriver;
}