import { useState, useEffect, useCallback } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://food-order-app-420a4-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
  
      const data = await response.json(meals);
  
      console.log(data);
  
      setMeals(data);
      setIsLoading(false)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, []);
  
  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler])
  const mealList = meals.map((meal) => (
    <MealItem
			id={meal.id}
      key={meal.id}
      title={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
