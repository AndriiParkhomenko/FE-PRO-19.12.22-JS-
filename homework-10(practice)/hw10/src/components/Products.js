import {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Product from "./Product";
import Cart from "./Cart";
import CategoriesSelect from "./CategoriesSelect";
import Spinner from 'react-bootstrap/Spinner';
import UserContext from "../context/UserContext";

function Products () {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState ('');
	const [showSpinner, setShowSpinner] = useState (true);
	const [user, setUser] = useState({email: ''});

	useEffect (() => {
		const savedCart =localStorage.getItem('cartItems');
		Promise.all([
			new Promise(resolve => {
				fetch(`https://fakestoreapi.com/products`).then(data => data.json()).then(data => {
					resolve(data);
				})
			}),
			new Promise(resolve => {
				fetch(`https://fakestoreapi.com/products/categories`).then(data => data.json()).then(data => {
					resolve(data);
				})
			}),
			new Promise(resolve => {
				fetch(`https://fakestoreapi.com/users/1`).then(data => data.json()).then(data => {
					resolve(data);
				})
			}),
		]).then(data => {
			if(savedCart) {
				let savedItems = JSON.parse(savedCart);
				for (let product of data[0]) {
					const savedProduct = savedItems.filter(savedItem => product.id === savedItem.id);
					product.addedToCart = savedProduct.length;
					product.count = savedProduct.length ? savedProduct[0].count : 1;
				}
				setProducts(data[0])
			} else {
				setProducts(data[0].map(product => ({...product, addedToCart: false, count: 1})));
			}
			setCategories(data[1]);
			setUser(data[2]);
			setShowSpinner(false);
		});
	}, [])

	function saveProducts(updatedProducts) {
		const productsToSave = updatedProducts.filter(product => product.addedToCart).map(product => ({id: product.id, count: product.count}));
		localStorage.setItem('cartItems', JSON.stringify(productsToSave));
	}

	function changeCount (id, newCount) {
		const newProducts = products.map(product => ({...product, count: id === product.id ? newCount : product.count}))
		setProducts(newProducts);
		saveProducts(newProducts);
	}

	function addToCart(id) {
		const newProducts = products.map(product => ({...product, addedToCart: id === product.id ? true : product.addedToCart}))
		setProducts(newProducts);
		saveProducts(newProducts);
  }

  function removeFromCart(id) {
    const newProducts = products.map(product => ({...product, count: 1, addedToCart: id === product.id ? false : product.addedToCart}))
    setProducts(newProducts);
	 saveProducts(newProducts);
  }

  function changeCategories (categoryName) {
	setSelectedCategory(categoryName);
  }

  return <Row>
  	<Col xs={12}>
		<UserContext.Provider value={{user}}>
			<Cart products={products.filter(product => product.addedToCart)} removeFromCart={removeFromCart} changeCount={changeCount}/>
		</UserContext.Provider>
	</Col>
	<Col xs={12}>
	<CategoriesSelect categories={categories} changeCategories={changeCategories} />
	</Col>
  	{products.filter(product => product.category === selectedCategory || !selectedCategory)
	.map(product => <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
	{showSpinner ? <div className={"shadow text-center"}>
		<div className={"spinner-block w-100 "}>
			<Spinner animation="grow" variant="success"/>
			<Spinner animation="grow" variant="success" className={"mx-1"}/>
			<Spinner animation="grow" variant="success"/>
			<Spinner animation="grow" variant="success" className={"mx-1"}/>
			<Spinner animation="grow" variant="success"/>
		</div>
	</div> : ''}
</Row>
}

export default Products;