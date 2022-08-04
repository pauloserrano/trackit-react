import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../styles/"
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Today from './Today'
import Tracker from './Tracker'
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Home />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Tracker />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App