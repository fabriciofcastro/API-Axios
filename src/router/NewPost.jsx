import style from './NewPost.module.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const NewPost = () => {

  const [title, setTitle] = useState( )
  const [body, setBody] = useState( )
  const navigate = useNavigate()

const createPost = (e) => {
  e.preventDefault()
}

  return (
    <div className={style.new_pots}>
      <h2>Criar novo posts</h2>

      <form action="POST" onSubmit={ e => createPost(e) }>
       
        <div className={style.form_control}>
          <label htmlFor="title" >Title</label>
          <input type="text" placeholder='Digite o título' id="title" name='title'/>
        </div>

        <div className={style.form_control}>
          <label htmlFor="body" >Conteúdo</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo" ></textarea>
        </div>
        <input type="submit" value="Criar" className={style.newBtn} />

      </form>
    </div>
  )
}

export default NewPost