import {useState} from "react"

 

export default function Main(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  

    const ingredientsListItems = ingredients.map((ingredient) => {
        return(
        <li>{ingredient}</li>
    )
    })
    
    function handleSubmit(event){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        ingredients.push(newIngredient)


        console.log(ingredients)
    }
   


    return (
        <main className="py-[30px] px-[30px] ">
            <form  onSubmit={handleSubmit} className="add-ingredient-form flex justify-center gap-[12px] item-center h-[38px]">
                <input 
                    className="rounded-md border-1 px-[9px] py-[13px] border-[#d1d5db] flex-1 min-w-[150px] max-w-[400px]"
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano" 
                    type="text"
                    name="ingredient"
                />

                <button
                    className="bg-[#141413] text-[#fafaf8] rounded-md w-[200px] font-stretch-150%"  
                >
                    + Add ingredient
                </button>
                 

            </form>
            
            <ul>
                {ingredientsListItems}
            </ul>

        </main>
    )
    
}