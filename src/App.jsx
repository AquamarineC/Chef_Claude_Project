import {useState} from "react" 
import MainPage from "./components/MainPage"
import Header from "./components/Header"
import Test from "./components/Test"

export default function App() {
     
    function Bpp() {

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const eStatus = formData.get("rr")
    const diet = formData.getAll("diet")
    const favColor = formData.get("favColor")
    console.log(eStatus)
    console.log(diet)
    console.log(favColor)

  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input className="border" id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" className="border" defaultValue="password123" type="password" name="password" />

        <br />

        <label htmlFor="comment">Description</label>
        <textarea id="comment" name="comment" className="border" defaultValue="hahaha hello">

        </textarea>
        
        <br />
        <fieldset className="border">
            <legend className="">              Employment status</legend>
                <label htmlFor="">Unemployed
                    <input name="rr" type="radio" value="Unemployed"/>
                </label>
                <label htmlFor="">Full-Time
                    <input name="rr" type="radio" defaultChecked={true} value="UFull-Time"/>
                </label>
                <label htmlFor="">part time.
                    <input name="rr" type="radio" value="part time."/>
                </label>
                 Radio label

                
                <button className="border"  >Submit</button>

        </fieldset>



                    <fieldset className="border">
                        <legend className="">             Dietary restrictions</legend>
                            <label htmlFor="">Glutten
                                <input name="diet" type="checkbox" value="Glutten"/>
                            </label>
                            <label htmlFor="">Peanut
                                <input name="diet" type="checkbox" defaultChecked={true} value="Peanut"/>
                            </label>
                            <label htmlFor="">Figs
                                <input name="diet" type="checkbox" value="Figs"/>
                            </label>
                            Radio label

                            
                            <button className="border"  >Submit</button>

                    </fieldset>

            {/* element before </form> */}

                    <label htmlFor="favColor" >What is your favorite color</label>
                    <br />
                    <select name="favColor" id="favColor" required>
                        <option value="" disabled>-- Choose a color --</option>

                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="aqua">aqua</option>
                        <option value="blue">blue</option>
                        <option value="purple">purple</option>
                        <option value="black">black</option>




                    </select>
            </form>
    </section>
  )
}



















    return (
        <>
            <Bpp />

        
        </>
    )
}