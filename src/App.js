import { useEffect, useState } from "react";
import "./App.css";

import { MyMeal } from "./MyMeal";
import { getAllMeal, addMeal, editMeal, deleteMeal } from "./FetchMeals";

function App() {
  //create state with data from API
  const [myMeal, setMeal] = useState([]);
    // DATA FROM INPUT
  // create state which already exist in backend Model
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [editing1, setEditing1] = useState(false);
  const [mealId, setMealId] = useState("");



  //send state in component with API(and update it there)
  useEffect(() => {
    getAllMeal(setMeal);
  }, []);

  const updatingInInput = (_id, title, ingredients, dayOfWeek) => {
    setEditing1(true);
    setTitle(title);
    setIngredients(ingredients);
    setDayOfWeek(dayOfWeek);
    setMealId(_id);
  };

  const checkedDay= (e)=>{
    const checkedDayWord=e.target.value
    console.log(checkedDayWord)
    setDayOfWeek(checkedDayWord)
  }


  return (
    <div className="App">
      <div className="form">
      <h1>Plan your meal</h1>

      <div className="inputsContainer">

<div className="dayOfWeek">
<h2>Choose day of week</h2>
      <select onChange={checkedDay}>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
</select>
</div>

      <input className="title"
        placeholder="Name of meal"
        type="text"
        //DATA FROM INPUT
        value={title}
        onChange={(e) => 
          setTitle(e.target.value.toUpperCase())
       }
      />

<textarea className="ingredients"
        placeholder="Ingredients, which you need for your meal"
        type="text"
        //DATA FROM INPUT
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
       
      />
</div>

      <button
      disabled={!title}
        onClick={
          editing1 ? ()=> editMeal(mealId, title, ingredients, setIngredients, setMeal, setTitle,  setEditing1, dayOfWeek, setDayOfWeek) : ()=> addMeal(title, ingredients,setIngredients, setTitle, setMeal, dayOfWeek, setDayOfWeek)
      }
      > 
        {editing1 ? "EDIT" : "ADD"}
      </button>
</div>
      {/*
      with method map() take from array with objects each el
      und display it through component MyMeal
      and send props with a necessary info*/}
      <div className="contWithAllEl">
      {myMeal.map((meal) => (
        <MyMeal
          text={meal.title}
          ingredients={meal.ingredients}
          dayOfWeek={meal.dayOfWeek}
          key={meal._id}
          setMeal={setMeal}
          updatingInInput={()=>updatingInInput(meal._id, meal.title, meal.ingredients, meal.dayOfWeek)}
          deleteMeal={()=>deleteMeal(meal._id, setMeal)}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
