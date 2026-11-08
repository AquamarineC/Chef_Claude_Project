import {useState} from "react"
import ClaudeRecipe from "./ClaudeRecipe" 
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main(){
 
    const[ingredients, setIngredients] = useState([])

    function formAction(formData){ 
        const newIngredients = formData.get("ggggdfaeth")
        setIngredients(prev => [...prev, newIngredients]) 
    }


    const [recipeShown, setRecipeShown] = useState(false);

    function getRecipe(){
        setRecipeShown(prev => !prev)
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
            
            {ingredients.length!==0 && <IngredientsList toggle={getRecipe} ingredients={ingredients}/>}
                
            {recipeShown && <ClaudeRecipe />}
                
           
           

            
        </main>
    )
    
}