$(document).ready(function() {
console.log("hi")
  var numbers = [1, 5, 7, 2, 6, 8, 4];

  function findNumsGreaterThanFour (numbers) {
    console.log("function")
  	var numsGreaterThanFour = [];
  	for (var index = 0; index < numbers.length; index++) {
      console.log("i: " + index + ", value: " + numbers[index]);
      if (numbers[index] > 4) {
        console.log("in if: " + numbers[index]);
      	numsGreaterThanFour.push(numbers[index])
      }
    }
    return numsGreaterThanFour;
  }

  var result = findNumsGreaterThanFour(numbers)
  $("#output").append(result);

});
