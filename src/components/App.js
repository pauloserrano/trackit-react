import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import { GlobalStyle } from "../styles/"
import SignIn from './SignIn'
import SignUp from './SignUp'
import Habits from './Habits'
import Today from './Today'
import Tracker from './Tracker'
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <Router>
        <GlobalProvider>
          <GlobalStyle />
          <Header />
          <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/hoje" element={<Today />} />
              <Route path="/historico" element={<Tracker />} />
          </Routes>
          <Footer />
        </GlobalProvider>
    </Router>
  )
}

export default App