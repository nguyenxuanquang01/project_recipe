import React, {useState, useEffect} from 'react';
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { startFetchMealsBySearch } from "../../actions/mealsActions";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [meals, setMeals] = useState([]);
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
    // startFetchMealsBySearch(searchTerm).then((res) => {
    //   console.log(res.data);
    //   setMeals(res.data);
    // });
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
      <input type = "text" className='form-control-input text-dark-gray fs-15' placeholder='Search recipes here ...' onChange={(e) => handleSearchTerm(e)} />
      <button type = "submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size = {20} />
      </button>
    </form>
  )
}

export default SearchForm