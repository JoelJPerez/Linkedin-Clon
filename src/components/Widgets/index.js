import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import style from "./styles.module.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Widgets = () => {

  const Articles = (title, subtitle) => {
    return (
      <div className={style.widgets__article}>
        <div className={style.widgets__lef}>
          <FiberManualRecordIcon />
        </div>
        <div className={style.widgets__right}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }


  return (
    <div className={style.widgets}>
      <div className={style.widgets__header}>
        <h2>Lo mas visto hoy en Linkedin</h2>
        <InfoIcon />
      </div>

      {Articles("JSON DEV", "Videos nuevos en youtube de React")}
      {Articles("FIREBASE Y REDUX", "Videos nuevos en youtube de React")}
      {Articles("JSON DEV", "Videos nuevos en youtube de React")}
      
    </div>
  )
}
