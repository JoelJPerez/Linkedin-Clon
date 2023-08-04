import React from "react";
import { Avatar } from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import style from "./styles.module.css";
import AddIcon from '@mui/icons-material/Add';

export const Sidebar = () => {

  const recentItem = (topic) => (
    <div className={style.sidebar__recentItem}>
      <span className={style.sidebar__hash}>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img
          src="https://i.pinimg.com/550x/a4/0c/93/a40c932e1a3ba26aa3aedcd49b1dd268.jpg"
          alt="portada"
        />

        <Avatar className={style.sidebar__avatar} />

        <h3>Joel dev</h3>
        <h4>joeldev@gmail.com</h4>
        <div className={style.sidebar__contents}>
          <div className={style.sidebar__cont}>
            <p>Contacto</p>
            <p>2</p>
          </div>
          <div className={style.sidebar__cont}>
            <p>
              <a href="#">Acede a información y herramientas<br />
                exclusivas <br />
              
                <b>Prueba Premiun gratis durante 1 mes</b>
              </a>
            </p>
          </div>
          <div className={style.sidebar__marc}>
            <div className={style.sidebar__marcadores}>
              <TurnedInIcon className={style.sidebar__icons} />
              <p>Marcapaginas</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className={style.sidebar__bottom}>
        <ul>
          <li>
            <p>Grupos</p>
          </li>
          <li>
            <p>Eventos</p>
          </li>
          <li>
            <p>Hastags Seguidores</p>
          </li>
        </ul>
        <AddIcon className={style.sidebar__box} />
      </div>
      <div className={style.sidebar__recent}>
        <p>Recientes</p>
        {recentItem("react.js")}
        {recentItem("node.js")}
        {recentItem("firebase.js")}
        {recentItem("grasplq.js")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>

    </div>
  );
};
