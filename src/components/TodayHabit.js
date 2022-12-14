import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Checkmark } from '../assets/check.svg'
import { getHabits, checkHabit, unCheckHabit } from '../services/api'

const TodayHabit = ({ habit, setHabits }) => {
    const [isChecked, setIsChecked] = useState(habit.done)

    useEffect(() => {
      getHabits('today')
        .then(({ data }) => setHabits(data))
        .catch(err => console.log(err))
    }, [isChecked, setHabits])

    const handleClick = async () => {
      try{
        if (isChecked){
          await unCheckHabit(habit.id)
        
        } else{
          await checkHabit(habit.id)
        }
        setIsChecked(!isChecked)
      
      } catch(err){
        console.log(err)
      }
    }

  return (
    <Wrapper isChecked={isChecked} streak={habit.currentSequence} record={habit.highestSequence}>
      <section>
          <h3>{habit.name}</h3>
          <p>Sequência atual: <span className='streak'>{habit.currentSequence} dias</span></p>
          <p>Seu recorde: <span className='record'>{habit.highestSequence} dias</span></p>
      </section>
      <button onClick={handleClick}>
        <Checkmark />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --color-checked: #8FC549;

  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: .5em;
  border-radius: 5px;
  font-size: 20px;
  background-color: #fff;

  section{
    flex: 1;

    h3{
      margin-bottom: .75em;
    }
  
    p{
      margin: .25em 0;
      font-size: 14px;
  
      span.record{
        color: ${props => props.streak >= props.record  && props.streak > 0 ? 'var(--color-checked)' : 'inherit'}
      }
  
      span.streak{
        color: ${props => props.isChecked ? 'var(--color-checked)' : 'inherit'}
      }
    }
    
    h3, p{
      color: #666666;
    }
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: none;
    border-radius: 5px;
    padding: 16px;
    background-color: ${props => props.isChecked ? 'var(--color-checked)' : '#EBEBEB'};
    color: #fff;
    transition: .2s all ease-in-out;
    cursor: pointer;
  }
`

export default TodayHabit