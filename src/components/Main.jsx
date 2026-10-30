
export default function Main(){
    return (
        <main className="py-[30px] px-[30px] ">
            <form className="add-ingredient-form flex justify-center gap-[12px] item-center h-[38px]">
                <input 
                    className="rounded-md border-1 px-[9px] py-[13px] border-[#d1d5db] flex-1 min-w-[150px] max-w-[400px]"
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano" 
                    type="text"
                
                />
                <button
                    className="bg-[#141413] text-[#fafaf8] rounded-md w-[200px] font-stretch-150%"
                >
                    + Add ingredient
                
                </button>

            </form>

        </main>
    )
    
}