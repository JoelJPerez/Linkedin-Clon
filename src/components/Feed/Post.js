import React from 'react'
import { Avatar } from "@mui/material"
import style from './styles.module.css'
import { InputIcon } from './InputIcon'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export const Post = ({name, description, message, photoURL, images}) => {
  return (
    <div className={style.post}>
      <div className={style.post__header}>
        <Avatar src={photoURL}/>
        <div className={style.post__info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={style.post__body}>
        <p>{message}</p>
        {images ? <img src={images} alt='mobile' />: ''}
      </div>
      <div className={style.post__buttom}>
        <InputIcon Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputIcon Icon={ChatOutlinedIcon} title="Comentar" color="gray" />
        <InputIcon Icon={ShareOutlinedIcon} title="Compartir" color="gray" />
        <InputIcon Icon={SendOutlinedIcon} title="Enviar" color="gray" />
      </div>
    </div>
  )
}
