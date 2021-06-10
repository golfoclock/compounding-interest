# True Cost Calculator :shopping: :purse: :chart_with_upwards_trend:


The True Cost Calculator shows what the potential future value of a sum of money could be if invested over 5, 10, 25, and 50 years.

## Languages / Frameworks Used
* HTML
* CSS
* JavaScript
* Bootstrap


## Finding Potential Future Values

```javascript
function calcFutureCost(principal, rate, frequency, years) {
	return principal * Math.pow(1 + rate / frequency, frequency * years);
}
```

## Credit
This project was adapted from Alex Zielonko's [interest calculator](https://megafauna.dev/javascript-compound-interest/) .

## License
[MIT](https://choosealicense.com/licenses/mit/)