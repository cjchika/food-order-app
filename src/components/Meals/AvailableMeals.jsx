import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
   
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-project-e16bf-default-rtdb.firebaseio.com/meals.json')
      const responseData = await response.json()

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    };


    fetchMeals();
  }, []);
  
  if(isLoading) {
    return (
      <section className={styles.mealsloading}>
      <p>Loading...</p>
      </section>
    )
  }
  
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
