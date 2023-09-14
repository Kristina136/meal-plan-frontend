

export const MyMeal = ({text, ingredients, deleteMeal, updatingInInput, dayOfWeek, typeOfMeal}) =>{

    console.log(typeOfMeal)
    
   
    return(
        <div className="contWithEachEl">
        <p className="day">{dayOfWeek}</p>
        <div className="contWIthMeal">
        <img src={`./${typeOfMeal}.png`} width="140px" alt="alt"/>
        <p className="title">{text}</p>
        <p>{ingredients}</p>
        <img className="deleteImg" onClick={deleteMeal} width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/delete-trash--v2.png" alt="delete-trash--v2"/>
        <img onClick={updatingInInput} width="30" height="30" src="https://img.icons8.com/fluency-systems-filled/48/hand-with-pen.png" alt="hand-with-pen"/>
      </div>
        </div>
    )
}