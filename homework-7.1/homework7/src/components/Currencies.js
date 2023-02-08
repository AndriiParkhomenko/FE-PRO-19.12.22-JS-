import { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import CurrenciesSearch from "./CurrenciesSearch";
import Currency from "./Currency";

function Currencies () {
	const [currencies, setCurrencies] = useState([]);
	const [filteredCurrencies, setFilteredCurrencies] = useState([]);

	useEffect(() =>{
		fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json')
		.then(data => data.json()).then(data => setCurrencies(data));
	}, [])

	function filterCurrencies (e) {
		let searchValue = e.currentTarget.value.trim().toLowerCase();
		setFilteredCurrencies(currencies.filter(currency => currency.txt.toLowerCase().includes(searchValue)))
	}

	return <>
	<h2 className={"pt-3"} >Currencies</h2>
	<CurrenciesSearch filterCurrencies={filterCurrencies}/>
	<Table>
		<thead><tr><th>Дата</th><th>Назва</th><th>Курс</th><th>Скорочення</th><th>R030</th></tr></thead>
		<tbody>
			{(filteredCurrencies.length ? filteredCurrencies : currencies).map(currency => <Currency currency={currency}/>)}
		</tbody>
	</Table>
	</>

}

export default Currencies;