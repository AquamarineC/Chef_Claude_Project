
import { useState } from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown, setIsShown] = useState(false)

    function handleClick(){
        return setIsShown( prev =>  !isShown)
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown && props.punchline}</p> 
            <button onClick={handleClick} className=" bg-blue-200">Toggle Button</button>
            <hr />
            
        </div>
    )
}