import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import Main from './components/Main'

function App() { 
  
 const [count, setCount] = useState(4)

 function countDecrease(){
    setCount(prevCount => prevCount - 1)
 }

 function countIncrease(){
    setCount(prevCount => prevCount + 1)
 }

  return (
    <>  
      <Header />
      <Main />

      <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={countDecrease} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={countIncrease} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    </>
  )
}

export default App
