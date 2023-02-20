import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function SingleProduct () {
	const {productId} = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		if(productId) {
			fetch(`https://fakestoreapi.com/products/${productId}`).then(data => data.json()).then(data => {
				setProduct(data);
			})
		}
	}, [])

	return <Card>
	<Card.Img variant="top" src={product.image} style={{maxHeight: '20rem', maxWidth: '20rem',}} />
	<Card.Body>
		<Card.Title>{product.title}</Card.Title>
	  <Card.Text>{product.description}</Card.Text>
	  <Card.Text><b>Category:</b> {product.category}</Card.Text>
	  <Card.Text><b>Price:</b> ${product.price}</Card.Text>
	</Card.Body>
 </Card>;
}

export default SingleProduct;