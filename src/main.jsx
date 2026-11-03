import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Bpp(){

  function signUp(e){
    
    const email = e.get("email")
    console.log(email)
    console.log(e.get("password"))
    console.log(e.get("srthsrht"))
 
  } 



  return(
    <section>
       <h1>signup Form</h1>    
       <form action={signUp}> 
          <label  htmlFor='email'>Email:</label  >
          <input className='border' id='email' type="email" name='email'/>
          <br />
          <input  className='' name='srthsrht' type="text" />
          <br />

          <label htmlFor="password" >password</label>
          <input type="password" id='password' name="password" className='border'/>
          <br />
          <label htmlFor="">button</label>
          <input type="submit" id='' className='border' value='click'/>
          


          <button>button</button>




       </form>
    </section>

  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Bpp />
  </StrictMode>,
)
