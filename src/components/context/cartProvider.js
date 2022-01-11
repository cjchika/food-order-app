import React from 'react';
import CartContext from './cart-context';

const CartProvider = props => {
	const addItemToCartHandler = item => {};
	
	const CartContext = {
		items: [],
		totalAmount: 0,
		addItem: (item) = {},
		remoteItem: (id) => {}
	}

	return <CartContext.Provider>
			{props.children}
	</CartContext.Provider>
};

export default CartProvider;