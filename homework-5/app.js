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

function searchCurrencies (currentSearch) {
	const backup = storage.getCurrencies();
	const filteredCurrencies = backup.filter(function(currencies) {
		return currencies.txt.toLowerCase().includes(currentSearch) ||
		currencies.cc.toLowerCase().includes(currentSearch);
	})
	renderCurrencies(filteredCurrencies);
}

function buildAutocomplete (currencies) {
	const availableTags = currencies.map(currencies => currencies.txt);
	$( "#rates-autocomplete" ).autocomplete({
		source: availableTags,
		select: function( event, ui ) {
			const currentSearch = ui.item.value.toLowerCase().trim();
			searchCurrencies(currentSearch);
			document.getElementById('search').value = currentSearch;
		}
	});
}

function getDateCurrencies (date) {
	document.querySelector('.btn').disabled = true;
	fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date.replaceAll('-', '')}&json`).then(function(data) {
		return data.json();
	}).then(function(data) {
		let currencies = data;
		document.getElementById('search').value = '';
		storage.setCurrencies(currencies);
		buildAutocomplete(currencies);
		renderCurrencies(currencies);
	}).finally(function () {
		document.querySelector('.btn').disabled = false;
	})
}

document.getElementById('search').onkeyup = function (e) {
	const currentSearch = e.currentTarget.value.toLowerCase().trim();
	searchCurrencies(currentSearch);
}
document.getElementById('date').onchange = function (e) {
	let date = e.currentTarget.value;
	localStorage.setItem('current-date', date);
	getDateCurrencies(date);
}

document.querySelector('.btn').onclick = function (e) {
	let currentDate = new Date().toJSON().split('T')[0];
	if (localStorage.getItem('current-date')) {
		currentDate = localStorage.getItem('current-date');
	}
	document.getElementById('date').value = currentDate;
	getDateCurrencies(currentDate);
}

