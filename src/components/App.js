import { createContext, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../styles/"
import SignIn from './SignIn'
import SignUp from './SignUp'
import Habits from './Habits'
import Today from './Today'
import Tracker from './Tracker'
import Header from "./Header"
import Footer from "./Footer"

export const GlobalContext = createContext()

const App = () => {
  const [user, setUser] = useState({})
  const [habits, setHabits] = useState([])

  return (
    <Router>
        <GlobalContext.Provider value={{user, setUser, habits, setHabits}}>
          <GlobalStyle />
          <Header />
          <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/hoje" element={<Today user={user} />} />
              <Route path="/historico" element={<Tracker />} />
          </Routes>
          <Footer />
        </GlobalContext.Provider>
    </Router>
  )
}

export default App