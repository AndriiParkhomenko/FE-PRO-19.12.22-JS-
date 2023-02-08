import { useEffect, useState } from "react";
import Good from "./Good";

function Goods () {
	const [goods, setGoods] = useState([]);
	
	useEffect (() => {
		fetch(`https://fakestoreapi.com/products`).then(data => data.json()).then(data => setGoods(data));
	}, [])
	
	
	return <table>
		<thead><tr><th>title</th><th>price</th><th>description</th><th>image</th><th>category</th></tr></thead>
		<tbody>
			{goods.map(good => <Good key={good.id} good={good}/>)}
		</tbody>
	</table>
}

export default Goods;