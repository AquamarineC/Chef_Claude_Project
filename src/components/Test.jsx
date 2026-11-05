import { useState } from "react"

export default function Text(){

    const[messages, setMessages] = useState([1,2,3,4,5,6])

    let text
    
    if(messages.length==0){
        text = "You are all caught up"
    } else if (messages.length==1){
        text = "You have 1 unread message"

    }else{
        text= `You have ${messages.length} unread messages`
    }

    return(
        <div>

            {text}
         </div>
    )
}