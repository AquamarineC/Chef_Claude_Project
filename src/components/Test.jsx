import { useState } from "react"

export default function Text(){

    const[car, setCar] = useState([{
        id: 1,
        color: "#F18D8B",
        on: true
    },   
    {
        id: 2,
        color: "#F5C280",
        on: false
    },   
    {
        id: 3,
        color: "#EEEC79",
        on: true
    },   
    {
        id: 4,
        color: "#64ED98",
        on: true
    },   
    {
        id: 5,
        color: "#63DEED",
        on: false
    },   
    {
        id: 6,
        color: "#877FED",
        on: false
    },   
    {
        id: 7,
        color: "#A57FE9",
        on: false
    },   
    {
        id: 8,
        color: "#F289C1",
        on: true
    },  ] )

   
    return(
        <div className="bg-amber-400">

           <p>Favoriate button is:    {car[2].id}    {car[2].color} </p>
         </div>
    )
}