function CurrenciesSearch (props) {
	return <input className={"form-control my-3"} placeholder={'Search'} onKeyUp={props.filterCurrencies}/>
}

export default CurrenciesSearch;