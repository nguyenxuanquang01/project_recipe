import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./MealDetailsPage.scss";
import CategoryList from '../../components/Category/CategoryList';
import { startFetchSingleMeal ,startFetchCategories} from "../../actions/mealsActions";
import MealSingle from "../../components/Meal/MealSingle";
import Loader from '../../components/Loader/Loader';
import { useState } from "react";
import { useMealContext } from '../../context/mealContext';

const MealDetailsPage = () => {
  // let mealLoading = false, categoryLoading = false;
  // const {id} = useParams();
  // const [meal, setMeal] = useState([]);  
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   startFetchSingleMeal(id).then((res) => {
  //   setMeal(res.data);
  //   });
  //   startFetchCategories().then((res) => {
  //   setCategories(res.data);
  //   });
  // }, []);

  const {id} = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading} = useMealContext();

  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);

  let ingredientsArr = [], measuresArr = [], singleMeal = {};
  if(meal && meal?.length > 0){
    for(let props in meal[0]){
      if(props.includes('strIngredient')){
        if(meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if(props.includes('strMeasure')){
        if(meal[0][props]){
          if(meal[0][props].length > 1){
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr
    }
  }

  return (
    <main className='main-content bg-whitesmoke'>
      { (mealLoading) ? <Loader /> : <MealSingle meal = {singleMeal} /> }
      { (categoryLoading) ? <Loader /> : <CategoryList categories={categories} /> }
    </main>
  )
}

export default MealDetailsPage
