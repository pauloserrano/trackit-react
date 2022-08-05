import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Main } from '../styles'
import { GlobalContext } from './App'
import { getHabits } from '../services/api'
import TodayHabit from './TodayHabit'


const Today = () => {
  const { user } = useContext(GlobalContext)
  const [habits, setHabits] = useState([])

  useEffect(() => {
    if (user.token) {
      localStorage.setItem('token', user.token)
    }

    getHabits('today')
      .then(({ data }) => setHabits(data))
      .catch(err => console.log(err))
  }, [])

  console.log({ user, habits })
  
  return (
    <StyledMain>
      <h3>Segunda, 17/05</h3>
      {habits.length > 0 
        ? habits.map((habit, index) => <TodayHabit key={index} habit={habit}/>)
        : <p>Nenhum hábito concluído ainda</p>}
    </StyledMain>
  )
}

const StyledMain = styled(Main)`
  p{
    color: #BABABA;
    margin: 1em 0;
  }
`

export default Today