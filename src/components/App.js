import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../styles/"
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App