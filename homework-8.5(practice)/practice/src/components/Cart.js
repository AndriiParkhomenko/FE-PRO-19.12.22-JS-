import {Badge} from "react-bootstrap";

function Cart({goods, removeFromCart}) {
  return <div className={goods.length ? 'cart-block p-3' : 'd-none'}>
    <h6>Cart</h6>
    <ul className={'my-1'}>
      {goods.map(product => <li>
        {product.title} (<b>${product.price.toFixed(2)}</b>)
        <Badge variant="warning"
               className={'ml-3 cursor-pointer bg-warning text-white'}
               onClick={() => removeFromCart(product.id)}>Remove</Badge>
      </li>)}
    </ul>
  </div>;
}

export default Cart;