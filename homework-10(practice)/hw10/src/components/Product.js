import {Button, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


function Product({product, addToCart, removeFromCart}) {
	return <Col sm={6} md={4} lg={3} className={'d-flex mt-3'}>
	  <Card className={'d-flex flex-column p-3 align-items-start'} style={{width: '100%'}}>
		 <div className={'flex-grow-1'}>
			<div className='text-center pt-3'>
			  <img src={product.image} className="product-image"/>
			</div>
			<Link to={ `/product/${product.id}`}>
			  <Card.Title className={'mt-4'}>{product.title}</Card.Title>
			</Link>
 
			<p>Category: {product.category}</p>
			<p><b>${product.price.toFixed(2)}</b></p>
		 </div>
		 {product.addedToCart ?
			  <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button> :
			  <Button variant="success" onClick={() => addToCart(product.id)}>Add to Cart</Button>}
	  </Card>
	</Col>
 }
export default Product