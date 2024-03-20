import style from './NewPost.module.css'

const NewPost = () => {
  return (
    <div className={style.new_pots}>
      <h2>Inserir novo posts</h2>
      <form action="POST">
        <div className={style.form_control}>
          <label htmlFor="title" >Title</label>
          <input type="text" aria-placeholder='Digite o título' id="title" name='title'/>
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