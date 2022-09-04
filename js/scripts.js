function calculate() {
    const rangeDisplayElement = document.getElementById('rangeDisplayElement');
    const lowerBoundaryNumber = parseFloat(document.getElementById('lowerBoundaryNumberElement').value);
    const upperBoundaryNumber = parseFloat(document.getElementById('upperBoundaryNumberElement').value);
    const currentNumber = parseFloat(document.getElementById('currentNumberElement').value);
    const distanceFromLowerBoundaryElement = document.getElementById('distanceFromLowerBoundaryElement');
    const distanceFromUpperBoundaryElement = document.getElementById('distanceFromUpperBoundaryElement');

    let distanceFromLowerBoundary = currentNumber - lowerBoundaryNumber;
    let distanceFromUpperBoundary = upperBoundaryNumber - currentNumber;
    let percentageDistanceFromLowerBoundary = ((currentNumber - lowerBoundaryNumber) / (upperBoundaryNumber - lowerBoundaryNumber)) * 100;
    let percentageDistanceFromUpperBoundary = ((upperBoundaryNumber - currentNumber) / (upperBoundaryNumber - lowerBoundaryNumber)) * 100;

    distanceFromLowerBoundaryElement.innerText = distanceFromLowerBoundary;
    distanceFromUpperBoundaryElement.innerText = distanceFromUpperBoundary;
    rangeDisplayElement.min = lowerBoundaryNumber;
    rangeDisplayElement.max = upperBoundaryNumber;
    rangeDisplayElement.value = currentNumber;

    document.getElementById('lowerRangeValue').innerText = lowerBoundaryNumber;
    document.getElementById('upperRangeValue').innerText = upperBoundaryNumber;
};