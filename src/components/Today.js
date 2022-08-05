import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Main } from '../styles'
import { useGlobalContext } from './context/GlobalContext'
import { getHabits } from '../services/api'
import TodayHabit from './TodayHabit'


const Today = () => {
  let { user, percentage, setPercentage } = useGlobalContext()
  const [habits, setHabits] = useState([])
  

  useEffect(() => {
    getHabits('today')
      .then(({ data }) => setHabits(data))
      .catch(err => console.log(err))
  }, [])

  const getPercentage = () => {
    setPercentage(((habits.filter(habit => habit.done).length / habits.length) * 100).toFixed(0))
    return percentage
  }

  console.log({ user, habits })
  
  return (
    <StyledMain percentage={percentage} habits={habits}>
      <h3>Segunda, 17/05</h3>
      {habits.length > 0 
        ? (<>
            <p>{getPercentage()}% dos hábitos concluídos</p>
            {habits.map((habit, index) => (
              <TodayHabit 
                key={index} 
                habit={habit}
                habits={habits}
                setHabits={setHabits} />
            ))}
          </>)
        : (<>
            <p>Nenhum hábito concluído ainda</p>
          </>)
      }
    </StyledMain>
  )
}

const StyledMain = styled(Main)`
  & > p{
    color: ${props => props.percentage > 0 && props.habits.length > 0 ? '#8FC549' : '#BABABA'};
    margin: .5em 0 1.5em;
  }

  & > div{
    justify-content: center;
  }
`

export default Today