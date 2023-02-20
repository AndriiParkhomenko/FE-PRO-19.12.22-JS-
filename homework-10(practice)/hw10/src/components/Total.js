import { ListGroup } from "react-bootstrap";
import Confirmation from "./Confirmation";

function Total ({products}) {
	return <ListGroup.Item active>
	<b>Total: ${products.reduce((acc, product) => acc + (product.count * product.price), 0).toFixed(2)}</b>
	<Confirmation/>
	</ListGroup.Item>
}

export default Total;