import { useState } from 'react' 
import Header from './components/Header'
import Main from './components/Main'

function App() { 
  
  const [myFavoriteThings, setMyFavoriteThings] = useState([])


  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]



  const thingsElements = myFavoriteThings.map(thidtrhng => <h1 key={thidtrhng}>{thidtrhng}</h1>)
 





  function addFavoriteThing() { 
    setMyFavoriteThings(prev => [
      ...prev, 
      allFavoriteThings[prev.length]]
    )
  }



  return (
    <main>
      <button onClick={addFavoriteThing}>Add item srt</button>
      <section key={thingsElements} aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}

export default App
