import {useState} from "react"

 

export default function Main(){
 
    const[ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return(
        <li>{ingredient}</li>
    )
    })
    
    function formAction(formData){ 
        const newIngredients = formData.get("ggggdfaeth")
        setIngredients(prev => [...prev, newIngredients]) 
    }
   


    return (
        <main className="py-[30px] px-[30px] ">
            <form  action={formAction} className="add-ingredient-form flex justify-center gap-[12px] item-center h-[38px]">
                <input 
                    className="rounded-md border-1 px-[9px] py-[13px] border-[#d1d5db] flex-1 min-w-[150px] max-w-[400px]"
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano" 
                    type="text"
                    name="ggggdfaeth"
                />

                <button
                    className="bg-[#141413] text-[#fafaf8] rounded-md w-[200px] font-stretch-150%"  
                     
                >
                     Add ingredient
                </button>
                 

            </form>
            
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientsListItems}
                </ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
    
}