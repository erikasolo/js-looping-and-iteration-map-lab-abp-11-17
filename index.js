// Code your solution in this file.
function lowerCaseDrivers(drivers) {
   return drivers.map(function(driver) {
     return driver.toLowerCase();
   })
 }
//
// {firstName: 'Bobby', lastName: 'Smith'}
function nameToAttributes(drivers) {
   return drivers.map(function(driver) {
     let fName = driver.split(' ')[0];
     let lName = driver.split(' ')[1];
     return {firstName: fName, lastName: lName};
   })
 }

function attributesToPhrase(drivers) {
   return drivers.map(function(driver) {
     return `${driver.name} is from ${driver.hometown}`;
   });
 }
