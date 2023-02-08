import { useEffect, useState } from "react";
import Product from "./Product";

function Goods () {
	const [goods, setGoods] = useState([]);
	
	useEffect (() => {
		fetch(`https://fakestoreapi.com/products`).then(data => data.json()).then(data => setGoods(data));
	}, [])
	
	
	return <div className="row p-3">
		{goods.map(product => <Product key={product.id} product={product}/>)}
	</div>

}

export default Goods;