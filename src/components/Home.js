import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Main } from '../styles'
import styled from 'styled-components'
import NewHabit from './NewHabit'
import Habit from './common/Habit'
import { getHabits } from '../services/api'

const Home = () => {
  const [habits, setHabits] = useState([])
  const { state } = useLocation()

  useEffect(() => {
    if (state) localStorage.setItem('token', state.token)
    
    getHabits().then(({ data }) => setHabits(data))
  }, [state, habits])

  return (
    <StyledHome>
      <NewHabit />
      {!habits.length > 0 
      ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      : habits.map(({id, name, days}) => <Habit id={id} name={name} days={days} setHabits={setHabits}/>)
      }
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