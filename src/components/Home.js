import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Main } from '../styles'
import styled from 'styled-components'
import NewHabit from './NewHabit'

const Home = () => {
  const [habits, setHabits] = useState([])
  const { state } = useLocation()

  useEffect(() => {
    if (state) localStorage.setItem('token', state.token)
  }, [])

  return (
    <StyledHome>
      <NewHabit />
      {!habits.length > 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
    </StyledHome>
  )
}

const StyledHome = styled(Main)`
  p{
    font-size: 18px;
    color: #666666;
    margin: 1.5em 0;
  }
`

export default Home