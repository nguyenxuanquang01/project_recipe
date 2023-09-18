import React, {useEffect} from 'react';
import "./CategoryPage.scss";
import { useState } from "react";
import { useMealContext } from '../../context/mealContext';
import { startFetchMealByCategory ,startFetchCategories} from "../../actions/mealsActions";
import MealList from '../../components/Meal/MealList';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
  const {name} = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  // const [categoryMeals, setCategoryMeals] = useState([]);
  // const [categories, setCategories] = useState([]);
  let catDescription = "";
  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  // useEffect(() => {
  //   startFetchMealByCategory(name).then((res) => {
  //   setCategoryMeals(res.data);
  //   });
  //   startFetchCategories().then((res) => {
  //     setCategories(res.data);
  //   });
  // }, []);

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          <h2 className='text-orange fw-8'>{name}</h2>
          <p className='fs-18 op-07'>{catDescription}</p>
        </div>
      </div>
      {
        (categoryMeals?.length) ? <MealList meals = { categoryMeals } /> : null
      }
    </main>
  )
}

export default CategoryPage
