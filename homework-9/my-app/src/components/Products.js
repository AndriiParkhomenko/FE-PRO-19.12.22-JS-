import {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Product from "./Product";
import Cart from "./Cart";
import Form from 'react-bootstrap/Form';

function Products () {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [searchedCategory, setSearchedCategory] = useState ([]);
	
	useEffect (() => {
		fetch(`https://fakestoreapi.com/products`).then(data => data.json()).then(data => {
			setProducts(data.map(product => ({...product, addedToCart: false, count: 1})));
		})
	}, [])

	function addToCart(id) {
		const newProducts = products.map(product => ({...product, addedToCart: id === product.id ? true : product.addedToCart}))
		setProducts(newProducts);
  }

  function removeFromCart(id) {
    const newProducts = products.map(product => ({...product, addedToCart: id === product.id ? false : product.addedToCart}))
    setProducts(newProducts);
  }

  useEffect (() => {
	fetch(`https://fakestoreapi.com/products/categories`).then(data => data.json()).then(data => {
		setCategories(data);
	})
  }, [])

  function filterCategory (e) {
	let searchCategory = e.currentTarget.value;
	if (searchCategory === categories) {
		setSearchedCategory(categories.join(','))
	}
	setSearchedCategory(searchCategory);
  }

  return <Row>
  	<Col xs={12}>
  		<Cart products={products.filter(product => product.addedToCart)} removeFromCart={removeFromCart}/>
	</Col>
	<Col xs={12}>
	<Form.Select aria-label="Default select example" className={'my-3'} onChange = {filterCategory}>
		  <option value={categories}>All categories</option>
		  <option value={categories[0]}>{categories[0]}</option>
		  <option value={categories[1]}>{categories[1]}</option>
		  <option value={categories[2]}>{categories[2]}</option>
		  <option value={categories[3]}>{categories[3]}</option>
		</Form.Select>
	</Col>
  	{(searchedCategory.length ? products.filter(product => searchedCategory.includes(product.category)) : products)
	.map(product => <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
</Row>
}

export default Products;