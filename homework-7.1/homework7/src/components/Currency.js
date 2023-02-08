function Currency (props) {
	return <tr key={props.currency.r030}>
		<td>{props.currency.exchangedate}</td><td>{props.currency.txt}</td><td>{props.currency.rate.toFixed(2)}</td>
		<td>{props.currency.cc}</td><td>{props.currency.r030}</td>
	</tr>
}

export default Currency;