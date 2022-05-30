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
    <div>
      {cartItems}
      <div className={styles.total}>
				<span>Total Amount</span>
				<span>40.50</span>
			</div>
      <div className={styles.actions}>
				<button className={styles['button--alt']}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
    </div>
  );
};

export default Cart;
