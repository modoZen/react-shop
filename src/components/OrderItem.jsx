import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png';


const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} onClick={()=>{removeFromCart(product)}} alt="close" />
		</div>
	);
}

export default OrderItem;