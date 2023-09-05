

export const MyMeal = ({text, ingredients, deleteMeal, updatingInInput, dayOfWeek}) =>{

    
   
    return(
        <div className="contWithEachEl">
        <p className="day">{dayOfWeek}</p>
        <p className="title">{text}</p>
        <p>{ingredients}</p>
        <img className="deleteImg" onClick={deleteMeal} width="38" height="38" src="https://img.icons8.com/fluency-systems-regular/48/delete-trash--v2.png" alt="delete-trash--v2"/>
        <img onClick={updatingInInput} width="38" height="38" src="https://img.icons8.com/fluency-systems-filled/48/hand-with-pen.png" alt="hand-with-pen"/>
      
        </div>
    )
}