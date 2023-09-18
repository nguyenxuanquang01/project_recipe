import axios from "axios";
import { useEffect } from "react";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS,
} from "./actions";

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";

export const startFetchCategories = async(dispatch) => {
  try{
      dispatch({ type: FETCH_CATEGORY_BEGIN});
      const response = await axios.get(`${CATEGORIES_URL}`);
      // console.log("startFetchCategories");
      // console.log(response.data);
      dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data});
  } catch(error){
    // console.log(error);
      dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message});
  }
}

// export const startFetchCategories = async() => {
//       try {
//         const res = await axios.get(CATEGORIES_URL);
//         return res
//       } catch (err) {
//         console.log(err);
//       }
    
// }

export const startFetchSingleMeal = async(dispatch, id) => {
  try{
      dispatch({ type: FETCH_SINGLE_MEAL_BEGIN});
      const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
      console.log("startFetchSingleMeal");
      console.log(response.data);
      dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data});
  } catch(error){
      dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message});
  }
}

// export const startFetchSingleMeal = async( id) => {
//     try {
//         const res = await axios.get(`${MEAL_SINGLE_URL}${id}`);
//         return res
//       } catch (err) {
//         console.log(err);
//       }
// }

export const startFetchMealByCategory = async(dispatch, category) => {
  try{
      dispatch({type: FETCH_CATEGORY_MEALS_BEGIN});
      const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
      // console.log("startFetchCategories");
      // console.log(response.data);
      dispatch({type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data})
  } catch(error){
      dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message});
  }
}


// export const startFetchMealByCategory = async(category) => {
//     try {
//         const res = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
//         return res
//       } catch (err) {
//         console.log(err);
//       }
// }


export const startFetchMealsBySearch = async(dispatch, searchTerm) => {
  try{
      dispatch({ type: FETCH_MEALS_BEGIN});
      const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
      dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data});
  } catch(error){
      dispatch({type: FETCH_MEALS_ERROR, payload: error.message});
  }
}

// export const startFetchMealsBySearch = async( searchTerm) => {
//   try {
//     const res = await axios.get(`${SEARCH_URL}${searchTerm}`);
//     return res
//   } catch (err) {
//     console.log(err);
//   }
// }