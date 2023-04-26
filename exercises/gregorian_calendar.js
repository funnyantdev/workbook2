"use strict";
var year = 1904;

function isLeapYear(year) {
  var yearIsDivisibleBy4 = year % 4 == 0;
  var yearIsACentury = year % 100 != 0;
  var yearIsDivisibleBy400 = year % 400 == 0;
  return yearIsDivisibleBy4 && (yearIsACentury || yearIsDivisibleBy400);
}

if (isLeapYear(1904)) {
  console.log("You beautiful man! " + year + " is a leap year!");
} else {
  console.log("YOU LOSER!!! I can't believe you didn't know that " + year + " is NOT a leap year!");
}
