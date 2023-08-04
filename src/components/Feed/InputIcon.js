import React from 'react'
import style from './styles.module.css'


export const InputIcon = ({Icon, title, color}) => {
  return (
    <div className={style.inputIcon}>
      <Icon style={{color: color}} />
      <h3>{title}</h3>
    </div>
  )
}