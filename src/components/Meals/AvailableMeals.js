import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fecthMeals = async () => {
      const response = await fetch(
        "https://ecommer-site-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setMeals(loadedMeals);
    };

    fecthMeals();
  }, []);
  const MealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
