import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import { startFetchCategories } from "../../actions/mealsActions";

const HomePage = () => {
//   const [categories, setCategories] = useState([]);
//   const [meals, setMeals] = useState([]);
//  let mealsLoading = true, categoryLoading = true;
// //  let meals = []
// useEffect(() => {
//   startFetchCategories().then((res) => {
//     setCategories(res.data);
//   });
// }, []);
// if  (categories.length > 0) {
//   categoryLoading = false
// }
// if  (meals.length > 0) {
//   mealsLoading = false
// }

// console.log(categories);
// console.log(meals);
 

const {categories, meals, categoryLoading, mealsLoading} = useMealContext();
  
  return (
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;
