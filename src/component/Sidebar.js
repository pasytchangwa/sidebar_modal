import React from 'react';
import {FaTimes } from 'react-icons/fa'
import logo from '../../src/logo.svg';
import {social, links} from '../data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {isSideBar, closeSideBar} = useGlobalContext()

  return (
    <aside className={isSideBar ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt="coding addict" className='logo' />
        <button type='button' onClick={closeSideBar} className='close-btn'>
        <FaTimes />
        </button>
      </div>
      <ul className='links'>
       {links.map((link) => {
         const {id, url, text, icon} = link;
         return (
           <li key={id}><a href={url}>{icon}{text}</a></li>
         )
       })}
      </ul>
      <ul className='social-icons'>
       {social.map((soc) => {
         const {id, url, icon} = soc;

         return (
          <li key={id}><a href={url}>{icon}</a></li>
         )
       })}
      </ul>
    </aside>
  )
}

export default Sidebar
