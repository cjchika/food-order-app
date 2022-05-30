import React, { Fragment } from "react";
import meals from '../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
				<h1>MealsJs</h1>
				<HeaderCartButton onClick={props.onShownCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={meals} alt="food"/>
			</div>
    </Fragment>
  );
};

export default Header;
