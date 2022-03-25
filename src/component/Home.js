import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const {openModal, openSideBar} = useGlobalContext()
  
  return (
   <main>
    <button type='button' onClick={openSideBar} className='sidebar-toggle'>
     <FaBars />
    </button>
    <button type='button' onClick={openModal} className='btn'>
     Show Modal
     </button>
   </main>
  )
}

export default Home