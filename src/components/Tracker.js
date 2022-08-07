import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Main } from '../styles'
import { useGlobalContext } from './context/GlobalContext'

const Tracker = () => {
  const { user } = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.token) {
      navigate('/')
      return
    }
    
  }, [])

  return (
    <Main>
      <h3>Histórico</h3>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </Main>
  )
}

export default Tracker