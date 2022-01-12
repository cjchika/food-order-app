import { useContext } from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../context/cart-context";

const Cart = (props) => {
  const cartCtx = useState(CartContext);

  
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
				<span>Total Amount</span>
				<span>70.99</span>
			</div>
      <div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onClose}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
    </Modal>
  );
};

export default Cart;
