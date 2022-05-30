import MealItemForm from './MealItemForm'
import styles from './MealItem.module.css'


const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`

  return (
		<li className={styles.meal}>
			<div>
				<h3>{props.title}</h3>
				<div className={styles.description}>{props.desc}</div>
				<div className={styles.price}>{props.price}</div>
			</div>
			<div>
				<MealItemForm id={props.id}/>
			</div>
		</li>
	)
};

export default MealItem;