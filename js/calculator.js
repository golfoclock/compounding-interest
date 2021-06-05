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
const rate = .10
const frequency = 4
const years = 10

const tenYearValue = calcFutureCost(
	handbagCost,
	rate,
	frequency,
	years
)

function addMessage() {
  var x = document.getElementById("answer");
  x.innerHTML = "True Amount is " + formatCurrency(tenYearValue);
}
