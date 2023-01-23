"use strict"

function createStorage () {
	let currenciesBackup = [];
	return {
		getCurrencies: function () {
			return currenciesBackup;
		},
		setCurrencies: function (newCurrencies) {
			if (!newCurrencies || !newCurrencies.length) return;
			currenciesBackup = newCurrencies;
		}
	}
}

const storage = createStorage ();

function renderCurrencies(currencies) {
	let htmlStr = currencies.reduce(function(acc, rates, index) {
	return acc + `<tr>
		<td>${index + 1}</td>
		<td>${rates.exchangedate}</td>
		<td>${rates.txt}</td>
		<td>${rates.rate.toFixed(2)}</td>
		<td>${rates.cc}</td>
		<td>${rates.r030}</td>
	</tr>`;
	}, '');

	document.getElementById('rates-tbody').innerHTML = htmlStr;
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json').then(function(data) {
	return data.json();
}).then(function(data) {
	const currencies = data;
	storage.setCurrencies(currencies);
	renderCurrencies(currencies)
})

document.getElementById('search').onkeyup = function (e) {
	const currentSearch = e.currentTarget.value.toLowerCase().trim();
	const backup = storage.getCurrencies();
	const filteredCurrencies = backup.filter(function(currencies) {
		return currencies.txt.toLowerCase().includes(currentSearch);
	})
	renderCurrencies(filteredCurrencies);
}