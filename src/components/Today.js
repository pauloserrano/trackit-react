import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Main } from '../styles'
import { useGlobalContext } from './context/GlobalContext'
import { getHabits } from '../services/api'
import TodayHabit from './TodayHabit'
import dayjs from 'dayjs'

const Today = () => {
  let { user, percentage, setPercentage, weekdays } = useGlobalContext()
  const [habits, setHabits] = useState([])
  
  const day = dayjs()
  const currentDay = {
    weekday: weekdays['pt-br'][day.$W],
    day: day.$D,
    month: day.$M + 1,
    formatted: () => (
      `${currentDay.weekday[0].toUpperCase()}${currentDay.weekday.slice(1)}, ${currentDay.day}/${currentDay.month}`
    )
  }
  

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
      <h3>{currentDay.formatted()}</h3>
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