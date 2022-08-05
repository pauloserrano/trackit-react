import { useState, createContext, useContext } from 'react'

const GlobalContext = createContext()

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [percentage, setPercentage] = useState(0)

  return (
    <GlobalContext.Provider value={{ user, setUser, percentage, setPercentage }}>
        {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, useGlobalContext }