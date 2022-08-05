import { useState, useEffect } from 'react'
import { Main } from '../styles'
import NewHabit from './NewHabit'
import Habit from './common/Habit'
import { getHabits } from '../services/api'


const Habits = () => {
  const [habits, setHabits] = useState([])

  useEffect(() => {
    getHabits()
      .then(({ data }) => setHabits(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Main>
      <NewHabit setHabits={setHabits} />
      {!habits.length > 0 
      ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      : habits.map(({id, name, days}, index) => (
        <Habit 
          id={id} 
          key={index} 
          name={name} 
          days={days} 
          setHabits={setHabits}/>
        ))
      }
    </Main>
  )
}

export default Habits