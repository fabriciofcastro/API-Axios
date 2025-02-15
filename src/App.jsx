import style from'./App.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
 
  return (
   <div className='App'>
    <Navbar />
    <div className={style.container}>
      <Outlet />
    </div>
   </div>
  )
}

export default App
