import React from 'react';
import avatar from "../assets/icons/avatar.jpg";
import "../styles/navbar.css";
import bell from "../assets/icons/bell.png"

export default function Header() {
  return (
    <header className='navbar'>
        <input type='text' className='search' placeholder='Search..'/>
        <div className='nav-right'>
            <button className='dark-toggle'>
                <img src={bell}/>
            </button>
            <img 
            src={avatar}
            className='avatar'
            />
            <button className='add-button'>+</button>
        </div>
    </header>
  )
}
