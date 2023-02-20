import {Badge, ListGroup, Button} from "react-bootstrap";

function CartItem ({product, removeFromCart, changeCount}) {
	return <ListGroup.Item>
        {product.title} (<b>${product.price.toFixed(2)}</b>)
		  <div class={"d-flex align-items-center justify-content-between"}>
			<div>
				<Button variant={'primary'} size={'sm'} disabled={product.count === 1}
				onClick={() => changeCount(product.id, product.count - 1)}>-</Button>
				<span class="mx-1">{product.count}</span>
				<Button variant={'primary'} size={'sm'} 
				onClick={() => changeCount(product.id, product.count + 1)}>+</Button>
			</div>
			<div>
				<b>${(product.count * product.price).toFixed(2)}</b>
			</div>
				<Badge variant="warning"
						className={'ml-3 cursor-pointer bg-warning text-white'}
						onClick={() => removeFromCart(product.id)}>Remove</Badge>
		  </div>
      </ListGroup.Item>
}

export default CartItem