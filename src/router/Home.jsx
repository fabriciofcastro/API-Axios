import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
import blogFetch from '../axios/config.js'

const Home = () => {

  const [posts, setPosts] = useState(() => [])

  const getPosts = async() => {
   
    try {
      const response = await blogFetch.get('./posts')
      
      const data = response.data
      setPosts(() => data)
     
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
   
  getPosts()
    
  }, [])
  

  return (
    <div className={style.home}>
      <h1>Útimos posts </h1>
      {
        posts.length === 0 ? <p>Carregando...</p> : (
          posts.map(post => (
            <div className={style.post} key={post.id}>
              <h2>{`${post.id} ) ${post.title}`}</h2>
              <h4>{`Body: ${post.body}`}</h4>
              <Link to={`/posts/${post.id}`} className={style.btn_posts}>Ler mais</Link>
            </div>
          ))
        ) 
      }
    </div>
  )
}

export default Home