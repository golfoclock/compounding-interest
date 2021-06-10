function formatCurrency(value) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(value)
}

function calcFutureCost(principal, rate, frequency, years) {
	return principal * Math.pow(1 + rate / frequency, frequency * years);
}

const handbagCost = 2850
const rate = .08
const frequency = 1
const years = 5

const investmentA = calcFutureCost(
	handbagCost,
	rate,
	frequency,
	years
)

const investmentB = calcFutureCost(
	handbagCost,
	rate,
	frequency,
	years * 2
)

const investmentC = calcFutureCost(
	handbagCost,
	rate,
	frequency,
	years * 5
)

const investmentD = calcFutureCost(
	handbagCost,
	rate,
	frequency,
	years * 10
)

function addMessageA() {
  var x = document.getElementById("answer");
  x.innerHTML = "Potential Value: " + formatCurrency(investmentA);
}

function addMessageB() {
  var x = document.getElementById("answerTen");
  x.innerHTML = "Potential Value: " + formatCurrency(investmentB);
}

function addMessageC() {
  var x = document.getElementById("answerTwentyFive");
  x.innerHTML = "Potential Value: " + formatCurrency(investmentC);
}

function addMessageD() {
  var x = document.getElementById("answerFifty");
  x.innerHTML = "Potential Value: " + formatCurrency(investmentD);
}
