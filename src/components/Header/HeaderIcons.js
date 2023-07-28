import React from 'react'
import './styles.css';
import { Avatar } from '@mui/material';

export const HeaderIcons = ({Icon, title, text, avatar}) => {
  return (
    <div className="header__icons">

        {Icon && <Icon className="header__box" />}
        {avatar && <Avatar className="header__box"/>}
        {title ? <h3>{title}</h3> : <h3 className="header__premium">{text}</h3>}
    </div>
  )
}
