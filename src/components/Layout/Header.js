import { Fragment } from 'react';

import mealsIMG from '../../assets/meals.jpg';
import styles from './Header.module.css'

const Header = props => {
	return <Fragment>
		<header className={styles.header}>
			<h1>MealsGo</h1>
			<button>Cart</button>
		</header>
		<div className={styles['main-image']}>
			<img src={mealsIMG} alt='Table full of different food'/>
		</div>
	</Fragment>
};

export default Header;