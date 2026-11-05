import {useState} from "react" 
import MainPage from "./components/MainPage"
import Header from "./components/Header"
import Test from "./components/Test"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

import Count from "./components/Count"






export default function App() {
    const [thdrhjtdyd, srfjtrs] = useState(79)

    function add() {
        srfjtrs(prevCount => prevCount + 1)
    }

    function subtract() {
        srfjtrs(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count stfrhsthrdhtyt={thdrhjtdyd}/>

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}