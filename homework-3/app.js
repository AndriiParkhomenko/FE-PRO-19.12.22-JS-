"use strict"

function renderCurrencies(currencies) {

	let htmlStr = currencies.map(function(rates, index) {
	return `<tr>
		<td>${index + 1}</td>
		<td>${rates.exchangedate}</td>
		<td>${rates.name}</td>
		<td>${rates.rate.toFixed(2)}</td>
		<td>${rates.cc}</td>
		<td>${rates.r030}</td>
  </tr>`;
	}).join('');

	document.getElementById('rates-tbody').innerHTML = htmlStr;
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json').then(function(data) {
	return data.json();
}).then(function(data) {
	const currencies = data.map(function(rates) {
	return {
		name: rates.txt,
		rate: rates.rate,
		exchangedate: rates.exchangedate,
		cc: rates.cc,
		r030: rates.r030
	}
	});
	renderCurrencies(currencies);
})
