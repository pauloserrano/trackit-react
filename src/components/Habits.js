import { useState, useEffect } from 'react'
import { Main } from '../styles'
import { useNavigate } from 'react-router-dom'
import NewHabit from './NewHabit'
import Habit from './common/Habit'
import { getHabits } from '../services/api'
import { useGlobalContext } from './context/GlobalContext'


const Habits = () => {
  const { user } = useGlobalContext()
  const [habits, setHabits] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.token) {
      navigate('/')
      return
    }

    getHabits()
      .then(({ data }) => setHabits(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Main>
      <NewHabit setHabits={setHabits} />
      {habits.length > 0 
        ? habits.map(({id, name, days}, index) => (
          <Habit 
            id={id} 
            key={index} 
            name={name} 
            days={days} 
            setHabits={setHabits}/>
          ))
        : (<>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          </>)
      }
    </Main>
  )
}

export default Habits