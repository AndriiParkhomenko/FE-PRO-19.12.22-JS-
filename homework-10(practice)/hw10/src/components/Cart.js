import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem"
import Total from "./Total";

function Cart({products, removeFromCart, changeCount}) {
  return <div className={products.length ? 'cart-block p-3' : 'd-none'}>
    <h6>Cart</h6>
	 <ListGroup className={'my-1'}>
	 {products.map(product => <CartItem key={product.id} product={product} removeFromCart={removeFromCart} changeCount={changeCount}/>)}
	 <Total products={products}/>
    </ListGroup>
  </div>;
}

export default Cart;