import {useState} from "react" 
import MainPage from "./components/MainPage"
import Header from "./components/Header"
import Test from "./components/Test"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"
import avatar from "./image/user.png"
import Star from "./components/Star"
import Body from "./components/Body"

import Count from "./components/Count"

import hahahahpads from "./pads"
import Pad from "./components/Pad"




export default function App(props) {

    const[padsState, setPadsState] = useState(hahahahpads)

    function toggle(id){
         setPadsState(prev => prev.map(item => {
                return(
                    item.id === id ? {...item, on:!item.on} : item
                )

            })
          ) 
        console.log(id)
        console.log(padsState)    
    }


    const soundPadsButtons = padsState.map((soundPadsButton) => {        

        return (
            <Pad 
                id={soundPadsButton.id}
                key={soundPadsButton.id} 
                color={soundPadsButton.color}  
                onClassName={soundPadsButton.on}
                toggle={toggle}
            />
        ) 
    })

 
    return (
        <div style={props.darkMode ? {backgroundColor: "#222222"} : {backgroundColor: "#cccccc"}}>
        
        <main >
            <div className="pad-container">
                {soundPadsButtons}
            </div>
        </main> 
        </div> 
    )
}