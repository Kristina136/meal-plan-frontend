import axios from "axios";

//get all meal from API and display it 
const getAllMeal = (setMeal)=> {
    axios.get("https://meal-plan-app.onrender.com")
    .then(({data})=> {
          console.log(data)
     setMeal(data)
})
}


//say to add new Meal and display what was before
const addMeal = (title, ingredients, setIngredients, setTitle, setMeal, dayOfWeek, setDayOfWeek, typeOfMeal, setTypeOfMeal)=>{
    axios.post(`https://meal-plan-app.onrender.com/saveMeals`, {title, ingredients, dayOfWeek, typeOfMeal})
    .then(()=>{
 //after push ADD empty inputs and update all list 
        setTitle("")
        setIngredients("")
        setDayOfWeek("")
        setTypeOfMeal("")
        getAllMeal(setMeal)
    })
    }

const editMeal = (mealId, title, ingredients, setIngredients, setMeal, setTitle, setEditing1, dayOfWeek,typeOfMeal, setDayOfWeek, setTypeOfMeal)=>{
    axios.post(`https://meal-plan-app.onrender.com/editMeal`, {_id: mealId, title, ingredients, dayOfWeek, typeOfMeal})
        .then(()=>{
            setTitle("")
            setIngredients("")
            setDayOfWeek("")
            setTypeOfMeal("")
            setEditing1(false)
            getAllMeal(setMeal)
        })
}


const deleteMeal = (_id, setMeal)=>{
    axios.post(`https://meal-plan-app.onrender.com/deleteMeal`, {_id})
        .then(()=>{
            getAllMeal(setMeal)
        })
}


export {getAllMeal,addMeal, editMeal,deleteMeal}