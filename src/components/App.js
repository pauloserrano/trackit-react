import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/GlobalStyle"
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

const App = () => {
  return (
    <Router>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App