import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../components/context/cart-context'
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
	const [btnIsHighlighted, setBtnIsHighligted] = useState(false);

	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0)

	const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

	const { items } = cartCtx;

	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setBtnIsHighligted(true);

		const timer = setTimeout(() => {
			setBtnIsHighligted(false)
		}, 300)

		return () => {
			clearTimeout(timer);
		};
	}, [items])

	return <button className={btnStyles} onClick={props.onClick}>
		<span className={styles.icon}>
			<CartIcon />
		</span>
		<span>Your Cart</span>
		<span className={styles.badge}>{numberOfCartItems}</span>
	</button>
}

export default HeaderCartButton;