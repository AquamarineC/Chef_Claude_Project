import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Bpp(){
  return(
    <section>
       <h1>signup Form</h1>    
       <form action="" method='post'> 
          <label  htmlFor='email'>Email:</label  >
          <input className='border' id='email' type="email" name='email'/>
          <br />
          <input  className='border' type="text" />
          <br />

          <label htmlFor="password">password</label>
          <input type="password" id='password' className='border'/>
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
