import React from "react";
import { Avatar } from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import "./styles.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.wipo.int/export/sites/www/shared/images/socialmedia/2019_03_art_3_1200.jpg"
          alt=""
        />

        <Avatar className="sidebar__avatar" />

        <h3>Joel</h3>
        <h4>joeldev@gmail.com</h4>
        <div className="sidebar__content">
          <div className="sidebar__cont">
            <p>Contacto</p>
            <p>2</p>
          </div>
          <div className="sidebar__cont">
            <p>
              <a href="#">
                Aceder a información y <br />
                herramientas exclusivas <br />
                {""}
                <b>Prueba Premiun gratis durante 1 mes</b>
                {""}
              </a>
            </p>
          </div>
          <div className="sidebar__cont">
            <div className="sidebar__marcadores">
              <TurnedInIcon className="sidebar__icons" />
              <p>Marcapaginas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
