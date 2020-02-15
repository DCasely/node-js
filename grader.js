function average(scores) {
  return Math.round(scores.reduce((x, y) => x + y) / scores.length);
}

// function average(scores) {
//   var total = 0;
//   scores.forEach(score => (total += score));
//   var avg = total / scores.length;
//   console.log(Math.round(avg));
// }

// function average(scores) {
//   var total = 0;

//   for (var i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }
//   console.log(Math.round(total / scores.length));
// }

console.log('SCIENCE CLASS');
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // should return 94

console.log('MATH CLASS');
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68
