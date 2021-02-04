/*Implement a function catAge that takes a number of human years as input
and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.*/

function catAge(year) {
  if (year === 1) {
    return 15;
  } else if (year === 2) {
    return 24;
  } else if (year === 0) {
    return 0
  } else {
    return 24 + (year - 2) * 4;
  }
}

console.log(catAge(6));