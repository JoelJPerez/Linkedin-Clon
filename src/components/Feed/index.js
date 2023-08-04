import React, {useState} from 'react'
import style from './styles.module.css'
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import { InputIcon } from './InputIcon';
import { Post } from './Post';


export const Feed = () => {
  const [input, setInput] = useState('')

  const sendPost = e => {
    e.preventDefault()

    setInput('')
  }


  return (
    <div class={style.feed}>
      <div className={style.feed__containerInput}>
        <div className={style.feed__input}>
        <CreateIcon className={style.feed__input_icon}/>
          <form>
            <input type='text' value={input} placeholder='Crear una publicación' onChange={e => setInput(e.target.value)} />
            <button onClick={sendPost} type='submit'>Enviar</button>
          </form>
        </div>
        <div className={style.feed__inputIcon}>
        {/*Icons*/}
        <InputIcon Icon={PhotoIcon} title="Foto" color='#70b5f9' />
        <InputIcon Icon={YouTubeIcon} title="Video" color='#7fc15e' />
        <InputIcon Icon={EventIcon} title="Evento" color='#e7a33e' />
        <InputIcon Icon={VerticalSplitIcon} title="Escribir Articulo" color='#f5987e' />
        </div>
      </div>
      <div>

        {/* Post */}
        <Post name="Joel dev" description="joeldev@gmail.com" message="Hola Mundo" photURL="" images="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        <Post name="Joel dev" description="joeldev@gmail.com" message="Hola Mundo" photURL="" images="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        <Post name="Joel dev" description="joeldev@gmail.com" message="Hola Mundo" photURL="" images="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        
      </div>
    </div>
  )
}

