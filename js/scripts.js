const distanceToRangeCalculatorForm = document.getElementById('distanceToRangeCalculatorForm');
const lowerRangeNumber = parseFloat(document.getElementById('lowerRangeNumber').value);
const upperRangeNumber = parseFloat(document.getElementById('upperRangeNumber').value);
const currentNumber = parseFloat(document.getElementById('currentNumber').value);
const distanceFromLowerRangeElement = document.getElementById('distanceFromLowerRange');
const distanceFromUpperRangeElement = document.getElementById('distanceFromUpperRange');

distanceToRangeCalculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    distanceFromLowerRangeElement.textContent = currentNumber - lowerRangeNumber;
    console.log(currentNumber - lowerRangeNumber);
    console.log(typeof currentNumber - lowerRangeNumber);
    distanceFromUpperRangeElement.textContent = upperRangeNumber - currentNumber;
});