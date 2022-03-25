import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModal, closeModal} = useGlobalContext()
  return (
    <div className={isModal ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
       <h3>Modal content</h3>
       <button type='button' onClick={closeModal} className='close-modal-btn'>
         <FaTimes />
       </button>
      </div>
    </div>
  )
}

export default Modal