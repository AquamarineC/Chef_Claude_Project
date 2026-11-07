
import { useState } from "react"

export default function Pad(props){



    return(
       <button 
            style={{backgroundColor: props.color}}
            className={props.onClassName ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
       
       />
    )
}