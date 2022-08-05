import { useState } from 'react'
import styled from 'styled-components'

const TodayHabit = ({ habit }) => {
    const [isChecked, setIsChecked] = useState(false)

  return (
    <Wrapper>
        <h3>{habit.name}</h3>
        <p>Sequência atual: {habit.currentSequence} dias</p>
        <p>Seu recorde: {habit.highestSequence} dias</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;

    div{
        font-size: 20px;
        color: #666666;
        margin-bottom: .5em;
    }

`

export default TodayHabit