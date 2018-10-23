var numbers = [1, 5, 7, 2, 6, 8, 4]

function findNumbersGreaterThanFour(numbers) {
  var numsGreaterThanFour = [];
  numbers.forEach(function(element){
    if (element > 4) {
      numsGreaterThanFour.push(element);
    }
  });
  return numsGreaterThanFour;
}

$(document).ready(function() {
  var result = findNumbersGreaterThanFour(numbers)
  $("#output").append(result);
});
