import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <h2>
        <Link to={'/'}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={'/'}>Blog</Link>
        </li>
        <li>
          <Link to={'/new'} className={style.newBtn} >Novo Post</Link>
        </li>
        
      </ul>

    </div>
  )
}

export default Navbar