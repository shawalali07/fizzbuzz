import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import mcroyale from '../../assets/mcroyale.png'
import cheeseBurger from '../../assets/cheeseBurger.png'
import texas from '../../assets/texas.jpg'
import hardees from '../../assets/hardees.jpg'

const DUMMY_MEALS = [
  {
    id: "ff4",
    name: "Hardee's Star",
    description: "Famous flame grilled",
    price: 899,
    img: <img src={hardees}/>
  },
  {
    id: "ff1",
    name: "McRoyale",
    description: "Finest beef hunger",
    price: 599,
    img: <img src={mcroyale}/>
  },
  {
    id: "ff3",
    name: "Texas Grill",
    description: "American, raw, meaty",
    price: 499,
    img: <img src={texas}/>
  },
  {
    id: "ff2",
    name: "Cheese Burger",
    description: "Say yes to cheese !",
    price: 349,
    img: <img src={cheeseBurger}/>
  },
  
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    id={meal.id}
    img={meal.img}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
