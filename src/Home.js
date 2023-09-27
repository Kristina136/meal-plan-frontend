import { useEffect, useState } from "react";
import { MyMeal } from "./MyMeal";
import { getAllMeal, addMeal, editMeal, deleteMeal } from "./FetchMeals";
import React from "react";

function Home() {
  //create state with data from API
  const [myMeal, setMeal] = useState([]);
  // DATA FROM INPUT
  // create state which already exist in backend Model
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [typeOfMeal, setTypeOfMeal] = useState("");
  const [editing1, setEditing1] = useState(false);
  const [mealId, setMealId] = useState("");
  const [loading, setLoading] = useState(true);

  //send state in component with API(and update it there)
  useEffect(() => {
    getAllMeal(setMeal);
    setLoading(false);
  }, []);

  const updatingInInput = (_id, title, ingredients, dayOfWeek, typeOfMeal) => {
    setEditing1(true);
    setTitle(title);
    setIngredients(ingredients);
    setDayOfWeek(dayOfWeek);
    setTypeOfMeal(typeOfMeal);
    setMealId(_id);
  };

  const checkedDay = (e) => {
    const checkedDayWord = e.target.value;
    console.log(checkedDayWord);
    setDayOfWeek(checkedDayWord);
  };

  const checkedType = (e) => {
    const checkedTypeWord = e.target.value;
    console.log(checkedTypeWord);
    setTypeOfMeal(checkedTypeWord);
  };

  return (
    <div>
      {loading &&
        <p>Loading...</p>
    }
      <div className="form">

          <div className="dayOfWeek">
            <h3> Choose day of week</h3>
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

          <div>
            <h3>Choose type of meal</h3>
            <div className="typeOfMealCont">
              <div className="cont-one">
              <label for="salad"> salad</label>
              <input
                onChange={checkedType}
                name="name"
                type="radio"
                value="salad"
              
              />
              <label> soup</label>
              <input
                name="name"
                onChange={checkedType}
                type="radio"
                value="soup"
              />
              <label> breakfast</label>
              <input
                name="name"
                onChange={checkedType}
                type="radio"
                value="breakfast"
              /> 
              </div>
              <div className="cont-one">
              <label> dinner</label>
              <input
                name="name"
                onChange={checkedType}
                type="radio"
                value="dinner"
              />
              <label> snacks</label>
              <input
                name="name"
                onChange={checkedType}
                type="radio"
                value="snacks"
              />
              <label> dessert</label>
              <input
                name="name"
                onChange={checkedType}
                type="radio"
                value="dessert"
              />
              </div>
            </div>
          </div>

          <input
            className="title"
            placeholder="Name of meal"
            type="text"
            //DATA FROM INPUT
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
          />

          <textarea
            className="ingredients"
            placeholder="Ingredients, which you need for your meal"
            type="text"
            //DATA FROM INPUT
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
      

        <button
          disabled={!title}
          onClick={
            editing1
              ? () =>
                  editMeal(
                    mealId,
                    title,
                    ingredients,
                    setIngredients,
                    setMeal,
                    setTitle,
                    setEditing1,
                    dayOfWeek,
                    typeOfMeal,
                    setDayOfWeek,
                    setTypeOfMeal
                  )
              : () =>
                  addMeal(
                    title,
                    ingredients,
                    setIngredients,
                    setTitle,
                    setMeal,
                    dayOfWeek,
                    setDayOfWeek,
                    typeOfMeal,
                    setTypeOfMeal
                  )
          }
        >
          {editing1 ? "EDIT" : "ADD"}
        </button>
      </div>
     
      <div className="contWithAllEl">
        {myMeal.map((meal) => (
          <MyMeal
            text={meal.title}
            ingredients={meal.ingredients}
            deleteMeal={() => deleteMeal(meal._id, setMeal)}
            updatingInInput={() =>
              updatingInInput(
                meal._id,
                meal.title,
                meal.ingredients,
                meal.dayOfWeek,
                meal.typeOfMeal
              )
            }
            dayOfWeek={meal.dayOfWeek}
            typeOfMeal={meal.typeOfMeal}
            key={meal._id}
            setMeal={setMeal}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
