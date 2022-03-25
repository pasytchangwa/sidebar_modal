import React, {useState, useContext, createContext} from 'react'

const AppContext = createContext();


const AppProvider = ({children}) => {
  const [isModal, setIsModal] = useState(false)
  const [isSideBar, setIsSideBar] = useState(false);

  const openModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false)
  }

  const openSideBar = () => {
    setIsSideBar(true)
  }

  const closeSideBar = () => {
    setIsSideBar(false)
  }

  return (
    <AppContext.Provider value= {{closeModal, closeSideBar, openModal, openSideBar, isModal, isSideBar}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext}