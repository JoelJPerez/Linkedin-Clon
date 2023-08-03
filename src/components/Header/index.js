import React from 'react'
import { HeaderIcons } from './HeaderIcons'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import style from './styles.module.css'

export const Header  = () => {
  return (
    <header className={style.header}> 
      <nav className={style.nav}>

      <LinkedInIcon className={style.logo} />

      <div className={style.header__buscar}>
        <SearchIcon />
        <input type="text" placeholder=""></input>
      </div>


      <HeaderIcons Icon={HomeIcon} title="Home" />
      <HeaderIcons Icon={SupervisorAccountIcon} title="mi red" />
      <HeaderIcons Icon={BusinessCenterIcon} title="Empleos" />
      <HeaderIcons Icon={ChatIcon} title="Mensajes" />
      <HeaderIcons Icon={NotificationsIcon} title="Notificaciones" />
      <HeaderIcons avatar title="yo" />
      <HeaderIcons Icon={AppsIcon} title="Productos" />
      <HeaderIcons text="Prueba Premium gratis durante 1 mes" />
      </nav>
    </header>
  )
}
