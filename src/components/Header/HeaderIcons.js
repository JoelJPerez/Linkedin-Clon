import React from 'react'
import style from "./styles.module.css";
import { Avatar } from '@mui/material';

export const HeaderIcons = ({Icon, title, text, avatar}) => {
  return (
    <div className={style.header__icons}>

        {Icon && <Icon className={style.header__box} />}
        {avatar && <Avatar className={style.header__box}/>}
        {title ? <h3>{title}</h3> : <h3 className={style.header__premium}>{text}</h3>}
    </div>
  )
}
