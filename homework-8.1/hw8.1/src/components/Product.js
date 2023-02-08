import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product ({product}) {
	return <Card className={'col-lg-3 m-3'} style={{ width: '18rem' }}>
	<div className="text-center"><Card.Img variant="top" className='product-image' src={product.image} /></div>
	<Card.Body>
	  <Card.Title>{product.title}</Card.Title>
	  <p>Category: <span>{product.category}</span></p>
	  <Card.Text>{product.description}</Card.Text>
	  <Button variant="success">Buy for {product.price}$</Button>
	</Card.Body>
	</Card>
}
export default Product