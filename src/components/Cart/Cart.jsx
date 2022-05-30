import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "a1", name: "Fufu", amount: 3, price: 15.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
				<span>Total Amount</span>
				<span>40.50</span>
			</div>
      <div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onClose}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
  );
};

export default Cart;
