import React from "react";
import { Avatar } from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import style from "./styles.module.css";

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img
          src="https://i.pinimg.com/550x/a4/0c/93/a40c932e1a3ba26aa3aedcd49b1dd268.jpg"
          alt=""
        />

        <Avatar className={style.sidebar__avatar} />

        <h3>Joel</h3>
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
      .sidebar__boton
    </div>
  );
};
