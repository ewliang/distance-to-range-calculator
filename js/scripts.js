function calculate() {
    const rangeDisplayElement = document.getElementById('rangeDisplayElement');
    const lowerBoundaryNumber = parseFloat(document.getElementById('lowerBoundaryNumberElement').value);
    const upperBoundaryNumber = parseFloat(document.getElementById('upperBoundaryNumberElement').value);
    const currentNumber = parseFloat(document.getElementById('currentNumberElement').value);
    const distanceFromLowerRangeElement = document.getElementById('distanceFromLowerRangeElement');
    const distanceFromUpperRangeElement = document.getElementById('distanceFromUpperRangeElement');

    let distanceFromLowerRange = currentNumber - lowerBoundaryNumber;
    let distanceFromUpperRange = upperBoundaryNumber - currentNumber;
    let percentageDistanceFromLowerRange = ((currentNumber - lowerBoundaryNumber) / (upperBoundaryNumber - lowerBoundaryNumber)) * 100;
    let percentageDistanceFromUpperRange = ((upperBoundaryNumber - currentNumber) / (upperBoundaryNumber - lowerBoundaryNumber)) * 100;

    distanceFromLowerRangeElement.innerText = distanceFromLowerRange;
    distanceFromUpperRangeElement.innerText = distanceFromUpperRange;
    rangeDisplayElement.min = lowerBoundaryNumber;
    rangeDisplayElement.max = upperBoundaryNumber;
    rangeDisplayElement.value = currentNumber;

    document.getElementById('lowerRangeValue').innerText = lowerBoundaryNumber;
    document.getElementById('upperRangeValue').innerText = upperBoundaryNumber;
};