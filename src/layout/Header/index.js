import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

export default function Header() {
  const activeClass = ({isActive}) => isActive ? "current" : undefined
  return (
    <>
    <ul>
      <li><NavLink className={activeClass} to="/">Home</NavLink></li>
      <li><NavLink className={activeClass} to="/axioslyrics">AxiosLyrics</NavLink></li>
      <li><NavLink className={activeClass} to="/artist">Artist</NavLink></li>
      <li><NavLink className={activeClass} to="/albums">Albums</NavLink></li>
    </ul>
    </>
  )
}
