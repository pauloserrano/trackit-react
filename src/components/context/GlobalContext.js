import { useState, createContext, useContext } from 'react'

const GlobalContext = createContext()

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
  const [percentage, setPercentage] = useState(0)
  const [userUpdate, setUserUpdate] = useState(false)
  const weekdays = {
    "pt-br": ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    "en": ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  }

  return (
    <GlobalContext.Provider value={{ userUpdate, setUserUpdate, weekdays, percentage, setPercentage }}>
        {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, useGlobalContext }