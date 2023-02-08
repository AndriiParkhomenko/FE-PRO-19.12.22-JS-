import {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Product from "./Product";
import Cart from "./Cart";

function Goods () {
	const [goods, setGoods] = useState([]);
	
	useEffect (() => {
		fetch(`https://fakestoreapi.com/products`).then(data => data.json()).then(data => {
			setGoods(data.map(product => ({...product, addedToCart: false, count: 1})));
		})
	}, [])

	function addToCart(id) {
		const newProducts = goods.map(product => ({...product, addedToCart: id === product.id ? true : product.addedToCart}))
    setGoods(newProducts);
  }

  function removeFromCart(id) {
    const newProducts = goods.map(product => ({...product, addedToCart: id === product.id ? false : product.addedToCart}))
    setGoods(newProducts);
  }

  return <Row>
  	<Col xs={12}>
  		<Cart goods={goods.filter(product => product.addedToCart)} removeFromCart={removeFromCart}/>
	</Col>
  	{goods.map(product => <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart}/>)}
</Row>
}

export default Goods;