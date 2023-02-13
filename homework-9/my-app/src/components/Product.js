import {Button, Card, Col} from "react-bootstrap";


function Product ({product, addToCart, removeFromCart,}) {
	return <Col sm={6} md={4} lg={3}>
	<Card className="m-2">
	<div className="text-center pt-3"><img className='product-image' src={product.image} /></div>
	<Card.Body>
	  <Card.Title>{product.title}</Card.Title>
	  <p>Category: <span>{product.category}</span></p>
	  <p>Price: <b>{product.price}$</b></p>
	  {product.addedToCart ? 
	  <Button variant="danger" onClick = {() =>{removeFromCart(product.id)}}>Remove</Button> : 
	  <Button variant="success" onClick = {() =>{addToCart(product.id)}}>Add to Cart</Button>}
	</Card.Body>
	</Card>
	</Col>
}
export default Product